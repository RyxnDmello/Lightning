import { Hono, Context } from "hono";

const app: Hono = new Hono();

app.get("/", async (ctx: Context) => {
  return ctx.json(
    {
      name: "Lightning",
    },
    200,
  );
});

export default app;
