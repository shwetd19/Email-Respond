import { defineConfig } from "vite";
import ReactRefresh from "@vitejs/plugin-react-refresh";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  build: {
    rollupOptions: {
      external: '/src/main.jsx',
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:10000",
        secure: false,
      },
    },
  },
  plugins: [ReactRefresh(), react()],
});


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

// export default defineConfig({
//   server: {
//     proxy: {
//       "/api": {
//         target: "http://localhost:10000",
//         secure: false,
//       },
//     },
//   },
//   plugins: [react()],
// });
