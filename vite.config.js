import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/HusAvUlver/",
  plugins: [react()],
  root: "src",
});
