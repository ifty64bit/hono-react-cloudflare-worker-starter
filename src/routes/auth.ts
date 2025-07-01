import { Hono } from "hono";

const authRoute = new Hono().get("/login", (c) => {
    return c.json({
        message: "Welcome to the login route!",
        status: "success",
    });
});

export default authRoute;
