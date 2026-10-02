// @lovable.dev/vite-tanstack-config already includes the Vite, React, Tailwind,
// TanStack Start and Nitro integration needed by the project.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Vercel needs Nitro's Vercel preset. The Lovable wrapper defaults to a
// Cloudflare-oriented target in other environments, so switch only when
// Vercel is building the project.
const isVercel = Boolean(process.env.VERCEL) || Boolean(process.env.VERCEL_URL);

export default defineConfig({
  tanstackStart: {
    // Keep the project's custom SSR server entry.
    server: { entry: "server" },
  },
  nitro: isVercel ? { preset: "vercel" } : true,
});
