import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/waifu-pics/",
  plugins: [tsconfigPaths()],
});
