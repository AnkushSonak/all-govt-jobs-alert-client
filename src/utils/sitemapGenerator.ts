
interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export class SitemapGenerator {
  private urls: SitemapUrl[] = [];

  addUrl(url: SitemapUrl): void {
    this.urls.push(url);
  }

  addUrls(urls: SitemapUrl[]): void {
    this.urls.push(...urls);
  }

  generateXML(): string {
    const urlsXML = this.urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority ? `<priority>${url.priority}</priority>` : ''}
  </url>`).join('');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXML}
</urlset>`;
  }

  clear(): void {
    this.urls = [];
  }
}

// Generate sitemap for government jobs site
export const generateGovJobsSitemap = (jobs: any[] = []) => {
  const sitemap = new SitemapGenerator();
  const baseUrl = 'https://govjobs-portal.com';
  const currentDate = new Date().toISOString().split('T')[0];

  // Static pages
  sitemap.addUrls([
    {
      loc: baseUrl,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 1.0
    },
    {
      loc: `${baseUrl}/jobs`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/categories`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/states`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/admit-cards`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/results`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 0.7
    }
  ]);

  // Job pages
  jobs.forEach(job => {
    sitemap.addUrl({
      loc: `${baseUrl}/jobs/${job.slug}-${job.id}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.6
    });
  });

  return sitemap.generateXML();
};
