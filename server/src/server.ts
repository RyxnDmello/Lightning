import { serve } from "bun";

import app from "./app";

import env from "@constants/environment";

const PORT = env.GLOBAL.PORT;

console.log(`ACTIVE | ${PORT}`);

serve({
  port: PORT,
  fetch: app.fetch,
});
