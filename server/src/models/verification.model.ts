import { Schema, model } from "mongoose";

import { UserSchema } from "./user.model";

import { generateOTP } from "@utils/generator";

export interface VerificationSchema {
  id?: string;
  _id?: string;
  user: string | UserSchema;
  otp: string;
  expiresAt: Date;
  deletesAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

const verificationSchema = new Schema<VerificationSchema>(
  {
    user: {
      type: Schema.Types.String,
      required: [true, "User ID Must Be Provided"],
      ref: "user",
      index: true,
    },
    otp: {
      type: Schema.Types.String,
      required: [true, "OTP Must Be Provided"],
      index: true,
      trim: true,
      minLength: [6, "OTP Must Be 6 Digits"],
      maxLength: [6, "OTP Must Be 6 Digits"],
      default: generateOTP(),
    },
    expiresAt: {
      type: Schema.Types.Date,
      required: [true, "Verification Expiry Must Be Set"],
      index: true,
    },
    deletesAt: {
      type: Schema.Types.Date,
      required: false,
      index: true,
      expires: 0,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

verificationSchema.pre("validate", function () {
  if (!this.deletesAt) return;

  if (this.deletesAt < this.expiresAt) {
    this.invalidate(
      "deletesAt",
      "A Verification Can Be Deleted On Or After Expiry",
      this.deletesAt,
    );
  }
});

const Verification = model("verification", verificationSchema);

export default Verification;
