import mongoose from "mongoose";

import User, { UserSchema } from "@models/user.model";
import Verification from "@models/verification.model";

import { VerifyValidatorSchema } from "@validators/auth/verify.validator";

import ApiError from "@errors/ApiError";

const verify = async (id: string, data: VerifyValidatorSchema) => {
  const dbVerification = await Verification.findOne(
    {
      user: id,
    },
    {
      _id: 1,
      user: 1,
      otp: 1,
      expiresAt: 1,
    },
  )
    .populate("user", {
      _id: 0,
      verified: 1,
      name: 1,
      email: 1,
    })
    .lean({
      versionKey: false,
    });

  if (!dbVerification) {
    throw new ApiError(
      "A Verification For The Given User Does Not Exist",
      "BAD_REQUEST",
    );
  }

  const dbUser = dbVerification.user as Pick<
    UserSchema,
    "verified" | "name" | "email"
  > | null;

  if (!dbUser) {
    throw new ApiError(
      "User With Given Email Address Does Not Exist",
      "BAD_REQUEST",
    );
  }

  if (dbUser.verified) {
    throw new ApiError(
      "User With Given Email Address Already Verified",
      "BAD_REQUEST",
    );
  }

  if (dbVerification.expiresAt < new Date()) {
    throw new ApiError(
      "Verification For The Given User Has Expired",
      "BAD_REQUEST",
    );
  }

  if (dbVerification.otp !== data.otp) {
    throw new ApiError("Invalid OTP Provided", "BAD_REQUEST");
  }

  await mongoose.connection.transaction(async () => {
    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          verified: true,
        },
      },
    );

    await Verification.deleteOne({
      _id: dbVerification._id,
    });
  });

  return {
    id,
    name: dbUser.name,
    email: dbUser.email,
  };
};

export default verify;
