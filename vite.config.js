import { defineConfig } from "vite";

// O site é um index.html único, sem framework. O Vite entra só para dar ao
// projeto um build previsível (npm run build → dist/), que é o que as
// hospedagens e o Lovable esperam encontrar.
export default defineConfig({
  server: { port: 8080, host: true },
  build: { outDir: "dist", assetsInlineLimit: 0 },
});
