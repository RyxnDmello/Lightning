import { login, verify, register } from "@services/auth.service";

import { LoginContext } from "@validators/auth/login.validator";
import { VerifyContext } from "@validators/auth/verify.validator";
import { RegisterContext } from "@validators/auth/register.validator";

import { ApiErrorResponse } from "@errors/ApiError";

export const _login = async (ctx: LoginContext) => {
  const data = ctx.req.valid("json");

  const result = await login(data);
  return ctx.json(result, 200);
};

export const _register = async (ctx: RegisterContext) => {
  const data = ctx.req.valid("json");

  const result = await register(data);
  return ctx.json(result, 200);
};

export const _verify = async (ctx: VerifyContext) => {
  const id = ctx.req.param("id");

  if (!id) {
    return ApiErrorResponse(ctx, {
      error: "User ID Must Be Provided",
      code: "BAD_REQUEST",
    });
  }

  const data = ctx.req.valid("json");

  const result = await verify(id, data);
  return ctx.json(result, 200);
};
