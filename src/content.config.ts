import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    year: z.string(),
    path: z.string(),
    description: z.string(),
    techstack: z.array(z.string()),
    imageUrls: z.array(z.string()),
    demoUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
  }),
});

export const collections = { blog, projects };
