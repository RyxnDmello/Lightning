import { Context, NotFoundHandler } from "hono";

import { ApiErrorResponse } from "@errors/ApiError";

/**
 * A middleware that returns a useful error response when no routes match.
 *
 * @param {Context} ctx - A hono context.
 *
 * @returns An error response.
 *
 * @example
 * import notFound from "@middlewares/notFound.middleware.ts"
 *
 * const app = new Hono();
 *
 * app.notFound(notFound);
 */
const notFound: NotFoundHandler = (ctx: Context) => {
  return ApiErrorResponse(ctx, {
    error: "The Service Requested Does Not Exist",
    code: "NOT_FOUND",
  });
};

export default notFound;
