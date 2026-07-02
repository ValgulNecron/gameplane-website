import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const docs = defineCollection({
  loader: glob({ base: "./src/content/docs", pattern: "**/*.mdx" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.enum([
      "start-here",
      "core-concepts",
      "extending",
      "development",
      "reference",
      "community",
    ]),
    order: z.number().int(),
    /** Lucide icon name shown in the docs sidebar. */
    icon: z.string(),
    /** Shorter sidebar label when the page title is long. */
    sidebarLabel: z.string().optional(),
  }),
});

export const collections = { docs };
