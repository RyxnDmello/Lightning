import { Hono } from "hono";

import { _login, _verify, _register } from "@controllers/auth.controller";

import verifyValidator from "@validators/auth/verify.validator";
import registerValidator from "@validators/auth/register.validator";
import loginValidator from "@validators/auth/login.validator";

/**
 * The auth router.
 */
const router = new Hono();

router.post("/login", loginValidator, _login);
router.post("/register", registerValidator, _register);

router.post("/verify/:id", verifyValidator, _verify);

export default router;
