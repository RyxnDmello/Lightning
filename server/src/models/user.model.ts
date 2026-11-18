import { Schema, model } from "mongoose";

export interface UserSchema {
  id?: string;
  _id?: string;
  verified: boolean;
  name: string;
  email: string;
  password: string;
  verifiedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema<UserSchema>(
  {
    verified: {
      type: Schema.Types.Boolean,
      required: false,
      default: false,
    },
    name: {
      type: Schema.Types.String,
      required: [true, "Name Must Be Provided"],
      trim: true,
      minLength: [4, "Name Must Be A Minimum Of 4 Characters"],
      maxLength: [100, "Name Must Be A Maximum Of 100 Characters"],
      match: [/^[A-Za-z\s]+$/, "Name Must Contain Only Letters And Spaces"],
    },
    email: {
      type: Schema.Types.String,
      required: [true, "Email Must Be Provided"],
      unique: [true, "Email Address Must Be Unique"],
      lowercase: true,
      index: true,
      trim: true,
      minLength: [10, "Email Must Be A Minimum Of 10 Characters"],
      maxLength: [250, "Email Must Be A Maximum Of 250 Characters"],
    },
    password: {
      type: Schema.Types.String,
      required: [true, "Password Must Be Provided"],
    },
    verifiedAt: {
      type: Schema.Types.Date,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

const User = model("user", userSchema);

export default User;
