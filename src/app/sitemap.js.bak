import { projects } from "../data/content";

export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = "https://portfolio.local";

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...projectUrls
  ];
}
