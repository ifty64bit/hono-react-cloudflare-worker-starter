import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:8787",
                changeOrigin: true,
               
            },
        },
    },
    resolve: {
        alias: {
            "@web": path.resolve(__dirname, "./src"),
            "@api": path.resolve(__dirname, "../api/src"),
            "@shared": path.resolve(__dirname, "../shared/src"),
        },
    },
});
