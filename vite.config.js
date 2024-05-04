import { defineConfig } from "vite";

export default defineConfig ({
    base: "https://github.com/Almesaody/2DGame/",
    build: {
        minify: "terser",
    },
});