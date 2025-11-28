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

const personal_projects = defineCollection({
  type: "content",
  schema: z.object({
    priority: z.number(),
    title: z.string(),
    year: z.string(),
    path: z.string(),
    description: z.string(),
    techstack: z.array(z.string()),
    imageUrls: z.array(z.string()),
    siteUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
  }),
});

const client_projects = personal_projects;

export const collections = { blog, personal_projects, client_projects };
