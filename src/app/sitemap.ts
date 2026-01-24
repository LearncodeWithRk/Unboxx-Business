import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    '/',
    '/about',
    '/contact',
    '/integrations',
    '/pricing',
    '/privacy',
    '/product',
    '/solutions',
    '/terms',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${siteConfig.url}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: page === '/' ? 1 : 0.8,
  }));

  return sitemapEntries;
}
