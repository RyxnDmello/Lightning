import { Context, ErrorHandler } from "hono";

import MongooseError from "@errors/MongooseError";
import ApiError, { ApiErrorResponse } from "@errors/ApiError";

/**
 * A middleware that returns a useful error response when an error occurs.
 *
 * It tracks and resolves Errors, ApiErrors, and MongooseErrors. It then
 * returns a useful response.
 *
 * @param {Error} error - An error instance.
 * @param {Context} ctx - A hono context.
 *
 * @returns An error response.
 *
 * @example
 * import onError from "@middlewares/onError.middleware.ts"
 *
 * const app = new Hono();
 *
 * app.onError(onError);
 */
const onError: ErrorHandler = (error: Error, ctx: Context) => {
  if (error instanceof ApiError) {
    return error.toResponse(ctx);
  }

  if (error instanceof MongooseError) {
    return error.toResponse(ctx);
  }

  return ApiErrorResponse(ctx, {
    error: "An Unexpected Error Has Occurred, Please Try Again Later",
    code: "INTERNAL_SERVER_ERROR",
  });
};

export default onError;
