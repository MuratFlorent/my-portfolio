import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
	work: defineCollection({
		loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/work" }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			href: z.string().optional(),
			status: z.enum(['in_progress', 'finish']).optional(),
			seoTitle: z.string().optional(),
			seoDescription: z.string().optional(),
			geoKeywords: z.array(z.string()).optional(),
			services: z.array(z.string()).optional(),
			stack: z.array(z.string()).optional(),
			highlights: z.array(z.string()).optional(),
			gallery: z.array(z.string()).optional(),
			heroImage: z.string().optional(),
			client: z.string().optional(),
			year: z.number().optional(),
		}),
	}),
};