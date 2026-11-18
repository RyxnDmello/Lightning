import mongoose from "mongoose";

import User from "@models/user.model";
import Verification from "@models/verification.model";

import { RegisterValidatorSchema } from "@validators/auth/register.validator";

import { getDate } from "@utils/date";
import { hashPassword } from "@utils/encryption";

import ApiError from "@errors/ApiError";

const register = async (data: RegisterValidatorSchema) => {
  const dbUser = await User.exists({
    email: data.email,
  });

  if (dbUser) {
    throw new ApiError(
      "User With Given Email Address Already Exists",
      "BAD_REQUEST",
    );
  }

  const password = await hashPassword(data.password);

  const newUser = new User({
    ...data,
    password,
  });

  const newVerification = new Verification({
    user: newUser.id,
    expiresAt: getDate(15, 0),
    deletesAt: getDate(30, 0),
  });

  await mongoose.connection.transaction(async () => {
    await newUser.save();
    await newVerification.save();
  });

  return {
    id: newUser.id,
  };
};

export default register;
