import * as z from "zod";

import type { Context, ValidationTargets } from "hono";

import { zValidator } from "@hono/zod-validator";

import ApiError from "@errors/ApiError";

type Target = keyof ValidationTargets;

/**
 * Extracts the Hono Context type from a validation middleware.
 *
 * Preserves the inferred input and output types of the Zod schema,
 * allowing separately defined controllers to access validated
 * request data with full TypeScript support.
 *
 * @example
 * const schema = z.strictObject({
 *   email: z.email(),
 *   password: z.string(),
 * });
 *
 * const registerValidator = validator("json", schema);
 *
 * type RegisterContext = ValidatorContext<typeof registerValidator>;
 */
export type ValidatorContext<T> = T extends (...args: infer Args) => unknown
  ? Args[0] extends Context
    ? Args[0]
    : never
  : never;

/**
 * Creates a type-safe Zod validation middleware for Hono.
 *
 * Validates the specified request target against the provided
 * schema and throws a standardized API error on failure.
 *
 * @param target - The Hono request validation target.
 * @param schema - The Zod schema used for validation.
 *
 * @returns A Hono middleware with inferred Zod input/output types.
 *
 * @example
 * const schema = z.strictObject({
 *   email: z.email(),
 *   password: z.string(),
 * });
 *
 * const createUserValidator = validator("json", schema);
 */
const validator = <T extends Target, S extends z.ZodType>(
  target: T,
  schema: S,
) => {
  return zValidator(target, schema, (result) => {
    if (result.success) return;

    const message =
      result.error.issues[0]?.message ??
      "Unable To Proceed Due To A Validation Error";

    throw new ApiError(message, "VALIDATION_ERROR");
  });
};

export default validator;
