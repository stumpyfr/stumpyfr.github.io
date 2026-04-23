import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const linkSchema = z.object({
  label: z.string(),
  href: z.url(),
});

const speakingMedia = defineCollection({
  loader: glob({
    base: './src/content/speaking-media',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    type: z.string(),
    venue: z.string().optional(),
    year: z.number().optional(),
    description: z.string(),
    links: z.array(linkSchema).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({
    base: './src/content/projects',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    group: z.string(),
    description: z.string(),
    links: z.array(linkSchema).default([]),
  }),
});

export const collections = {
  'speaking-media': speakingMedia,
  projects,
};
