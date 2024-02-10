// // vite.config.js
// import ReactRefresh from "@vitejs/plugin-react-refresh";

// export default {
//   build: {
//     rollupOptions: {
//       external: '/src/main.jsx',
//     },
//   },
//   plugins: [ReactRefresh()],
// };

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; 

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        secure: false,
      },
    },
  },
  plugins: [react()],
});
