import User from "@models/user.model";
import Verification from "@models/verification.model";

import { LoginValidatorSchema } from "@validators/auth/login.validator";

import { getDate } from "@utils/date";

import ApiError from "@errors/ApiError";

const login = async (data: LoginValidatorSchema) => {
  const dbUser = await User.findOne(
    {
      email: data.email,
    },
    {
      _id: 1,
      verified: 1,
      name: 1,
      email: 1,
    },
  ).lean({
    versionKey: false,
  });

  if (!dbUser) {
    throw new ApiError(
      "User With Given Email Address Does Not Exist",
      "BAD_REQUEST",
    );
  }

  if (!dbUser.verified) {
    await new Verification({
      user: dbUser._id,
      expiresAt: getDate(15, 0),
      deletesAt: getDate(30, 0),
    }).save();

    return {
      id: dbUser._id,
    };
  }

  return {
    id: dbUser._id,
    name: dbUser.name,
    email: dbUser.email,
  };
};

export default login;
