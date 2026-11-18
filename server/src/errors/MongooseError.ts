import { Error, mongo } from "mongoose";

import ApiError from "@errors/ApiError";

/**
 * A type that represents common Mongoose error types.
 *
 * This type includes validation errors, cast errors,
 * and MongoDB server errors.
 */
export type MongooseErrorTypes =
  Error.CastError | Error.ValidationError | mongo.MongoServerError;

/**
 * A helper function that checks if an error is a MongooseError.
 *
 * @param {unknown} error - The error to be checked.
 *
 * @returns True if the error is a MongooseError, otherwise false.
 */
export const isMongooseError = (error: unknown) => {
  return Boolean(
    error instanceof Error.CastError ||
    error instanceof Error.ValidationError ||
    error instanceof mongo.MongoServerError,
  );
};

/**
 * A class that represents a Mongoose API error.
 *
 * This class extends the ApiError class and converts Mongoose errors into
 * standardized API errors with meaningful messages and error codes.
 *
 * @example
 * throw new MongooseError(error as MongooseErrorTypes);
 */
export default class MongooseError extends ApiError {
  /**
   * A constructor that creates a new API error.
   *
   * @param {MongooseErrorTypes} error - The original Mongoose error.
   *
   * @example
   * throw new MongooseError(error as MongooseErrorTypes);
   */
  constructor(error: MongooseErrorTypes) {
    if (error instanceof Error.ValidationError) {
      const instance = Object.values(error.errors)[0];

      if (instance) {
        super(instance.message, "VALIDATION_ERROR");
        return;
      }

      super("An Unexpected Validation Error Has Occurred", "VALIDATION_ERROR");
      return;
    }

    if (error instanceof Error.CastError) {
      super("A Field Has Been Assigned An Invalid Value", "CAST_ERROR");
      return;
    }

    if (error instanceof mongo.MongoServerError && error.code === 11000) {
      super("A Duplicate Field Has Been Detected", "DUPLICATE_KEY_ERROR");
      return;
    }

    if (error instanceof mongo.MongoServerError) {
      super(
        "An Internal Database Server Error Has Occurred",
        "DATABASE_SERVER_ERROR",
      );

      return;
    }

    super(
      "An Unexpected Database Server Error Has Occurred",
      "DATABASE_SERVER_ERROR",
    );
  }
}
