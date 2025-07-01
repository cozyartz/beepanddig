import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
  const posts = await getCollection('blog');
  const items = posts.length > 0
    ? posts.map((post) => ({
        title: post.data.title || 'Beep & Dig Adventure',
        description: post.data.description || 'Join the treasure hunt!',
        pubDate: post.data.pubDate || new Date(),
        link: `/blog/${post.id.replace(/\.mdx$/, '')}`,
        author: post.data.author || 'Diggity Dog',
        categories: post.data.tags || [],
      }))
    : [{
        title: 'Welcome to Beep & Dig',
        description: 'Start your metal detecting journey with Diggity Dog!',
        pubDate: new Date(),
        link: '/blog/welcome',
        author: 'Diggity Dog',
      }];

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site, // Uses the site URL from astro.config.mjs
    items: items,
    trailingSlash: false,
  });
}