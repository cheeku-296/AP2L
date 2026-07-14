import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ap2l.ai';

  // Add the most important static routes
  const staticRoutes = [
    '',
    '/company',
    '/contact',
    '/pricing',
    '/products/cliqtest',
    '/products/finxplore',
    '/products/jupiter',
    '/products/netraa',
    '/products/saransh',
    '/products/shieldvue',
    '/products/swikruti',
    '/solutions/devops',
    '/solutions/it-support',
    '/solutions/qa-teams',
    '/solutions/security-compliance',
    '/resources/blog',
    '/resources/case-studies',
    '/resources/documentation',
    '/resources/faq',
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
