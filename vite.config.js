import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/tutorial",
  plugins: [react()],
  // css:{
  //   modules:{
  //     localsConvention:"camelCase",
  //     generateScopedName:"[local]_[hash:base64:2]"
  //   }

  // }
});
