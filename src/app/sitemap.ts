import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.rbew.com'
  
  // Static pages
  const staticPages = [
    '',
    '/team',
    '/projects',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Project pages
  const projects = [
    'realism-hit-roleplay',
    'framestate-rp',
    'pendant-legacy',
    'time-police-department',
    'virtual-guardians',
  ].map((project) => ({
    url: `${baseUrl}/projects/${project}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...projects]
}
