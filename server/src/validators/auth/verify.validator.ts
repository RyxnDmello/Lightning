import * as z from "zod";

import validator, { ValidatorContext } from "@middlewares/validator.middleware";

const verifyValidatorSchema = z.strictObject(
  {
    otp: z
      .string("OTP Must Be A 6 Digit String")
      .min(6, "OTP Must Be 6 Digits")
      .max(6, "OTP Must Be 6 Digits")
      .regex(/^\d{6}$/, "OTP Must Be 6 Digits"),
  },
  "Only OTP Must Be Provided",
);

/**
 * A validator middleware for account verification requests.
 *
 * This middleware validates the request body against the account verification schema.
 */
const verifyValidator = validator("json", verifyValidatorSchema);

/**
 * A type that represents the validated account verification payload.
 */
export type VerifyValidatorSchema = z.infer<typeof verifyValidatorSchema>;

/**
 * A type that represents the Hono context with validated account verification data.
 */
export type VerifyContext = ValidatorContext<typeof verifyValidator>;

export default verifyValidator;
