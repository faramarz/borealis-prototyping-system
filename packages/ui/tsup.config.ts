import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: [
    "react",
    "react-dom",
    "@radix-ui/*",
    "class-variance-authority",
    "clsx",
    "tailwind-merge",
    "lucide-react",
    "react-day-picker",
    "date-fns",
    "input-otp",
    "vaul",
    "embla-carousel-react",
    "react-resizable-panels",
    "react-hook-form",
    "@hookform/resolvers/zod",
    "zod"
  ],
  esbuildOptions(options) {
    options.alias = {
      "@": "./src"
    };
  }
}); 