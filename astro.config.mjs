import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://digital.newberry.org/collection-stories",
  output: "server",
  adapter: vercel({
    speedInsights: { enabled: true, },
  }),
  // adapter: node({
  //   mode: "standalone"
  // })
});
