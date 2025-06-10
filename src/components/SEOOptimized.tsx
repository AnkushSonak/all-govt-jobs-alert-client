
import { Helmet } from 'react-helmet-async';

interface SEOOptimizedProps {
  title: string;
  description: string;
  url?: string;
  type?: string;
  image?: string;
  structuredData?: object;
  canonical?: string;
  keywords?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
}

export const SEOOptimized = ({ 
  title, 
  description, 
  url = "https://govjobs-portal.com",
  type = "website",
  image = "https://govjobs-portal.com/og-image.png",
  structuredData,
  canonical,
  keywords = "government jobs, sarkari naukri, latest jobs, banking jobs, railway jobs, SSC, UPSC",
  author = "GovJobs Portal",
  publishedTime,
  modifiedTime,
  noindex = false
}: SEOOptimizedProps) => {
  const fullTitle = title.includes('GovJobs Portal') ? title : `${title} | GovJobs Portal`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Robots Meta */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Language and Locale */}
      <meta name="language" content="en" />
      <meta httpEquiv="content-language" content="en" />
      <html lang="en" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="GovJobs Portal" />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@govjobsportal" />
      <meta name="twitter:creator" content="@govjobsportal" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
      
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};
