import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { vitePrerenderPlugin } from "vite-prerender-plugin";
import { fileURLToPath } from "node:url";

// Пострендер-чистка: vite-prerender-plugin оставляет в index.html modulepreload
// на серверный бандл пререндера и сам чанк в dist. Клиенту он не нужен — убираем.
function stripPrerenderChunk(): Plugin {
  return {
    name: "strip-prerender-chunk",
    enforce: "post",
    generateBundle(_opts, bundle) {
      let prerenderFile: string | undefined;
      for (const [file, chunk] of Object.entries(bundle)) {
        if (chunk.type === "chunk" && chunk.exports?.includes("prerender")) {
          prerenderFile = file;
        }
      }
      if (!prerenderFile) return;

      const html = bundle["index.html"];
      if (html && html.type === "asset" && typeof html.source === "string") {
        const esc = prerenderFile.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        html.source = html.source.replace(
          new RegExp(`\\s*<link[^>]*modulepreload[^>]*${esc}[^>]*>`, "g"),
          ""
        );
      }
      delete bundle[prerenderFile];
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    vitePrerenderPlugin({
      renderTarget: "#root",
      prerenderScript: fileURLToPath(new URL("./src/prerender.tsx", import.meta.url)),
    }),
    stripPrerenderChunk(),
  ],
});
