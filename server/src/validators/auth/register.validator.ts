import * as z from "zod";

import validator, { ValidatorContext } from "@middlewares/validator.middleware";

const registerValidatorSchema = z.strictObject(
  {
    name: z
      .string("Name Must Be A Valid First, Middle, And Last Name")
      .min(4, "Name Must Be A Minimum Of 4 Characters")
      .max(100, "Name Must Be A Maximum Of 100 Characters")
      .regex(/^[A-Za-z\s]+$/, "Name Must Contain Only Letters And Spaces")
      .trim(),
    email: z
      .email("Email Must Be A Valid Email Address")
      .min(10, "Email Must Be A Minimum Of 10 Characters")
      .max(250, "Email Must Be A Maximum Of 250 Characters")
      .lowercase("Email Must Be Lowercase")
      .trim(),
    password: z
      .string("Password Must Be A String Or Phrase")
      .min(8, "Password Must Be A Minimum Of 8 Characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,50}$/,
        "Password Must Contain At Least 1 Lowercase, 1 Uppercase, 1 Digit, And 1 Special Character",
      )
      .max(50, "Password Must Be A Maximum Of 50 Characters")
      .trim(),
  },
  "Only Name, Email, And Password Must Be Provided",
);

/**
 * A validator middleware for user registration requests.
 *
 * This middleware validates the request body against the register schema.
 */
const registerValidator = validator("json", registerValidatorSchema);

/**
 * A type that represents the validated register user payload.
 */
export type RegisterValidatorSchema = z.infer<typeof registerValidatorSchema>;

/**
 * A type that represents the Hono context with validated register user data.
 */
export type RegisterContext = ValidatorContext<typeof registerValidator>;

export default registerValidator;
