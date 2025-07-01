import { Hono } from "hono";
import authRoute from "./routes/auth";

const app = new Hono().basePath("/api").get("/health", (c) => {
    return c.json({ status: "ok" });
});

app.route("/auth", authRoute);

export type AppType = typeof app;
export default app;
