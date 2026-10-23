import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../data/site';

import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  return rss({
    title: `${SITE.name} Insights`,
    description: 'Cybersecurity, AI, event technology and smart venues — field notes from Dubai.',
    site: context.site ?? new URL(SITE.url),
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: `/insights/${p.slug}`,
      categories: [p.data.category],
      author: p.data.author,
    })),
  });
}
