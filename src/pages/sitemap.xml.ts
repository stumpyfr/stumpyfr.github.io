import type { APIRoute } from 'astro';
import { absoluteUrl } from '@/config/site';

const pages = ['/', '/about', '/speaking-media', '/projects', '/contact'];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
    .map(
      (page) =>
        `  <url>\n    <loc>${absoluteUrl(page)}</loc>\n    <changefreq>monthly</changefreq>\n  </url>`
    )
    .join('\n')}\n</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
