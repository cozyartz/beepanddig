import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  loader: glob({
    base: 'src/content/blog',
    pattern: '**/*.{md,mdx}',
  }),
  schema: ({ image }) => z.object({
    title: z.string().min(1, 'A catchy title is required for your treasure-hunting tale!'),
    description: z.string().min(1, 'Describe your metal detecting adventure to hook readers!'),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
    tags: z.array(z.string()).optional().default([]), // Default to empty array if omitted
    author: z.string().default('Diggity Dog'), // Default pseudonym for consistency
    location: z.string().optional(), // Optional field for Michigan regions (e.g., "Lower Peninsula North")
  }),
});

export const collections = { blog };