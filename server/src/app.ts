import { Hono } from "hono";

import onError from "@middlewares/onError.middleware";
import notFound from "@middlewares/notFound.middleware";
import initialize from "@middlewares/initialize.middleware";

import authRoutes from "@routes/auth.routes";

await initialize();

/**
 * The root router.
 */
const app = new Hono().basePath("/api");

app.onError(onError);
app.notFound(notFound);

app.route("/auth", authRoutes);

export default app;
