
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  type?: string;
  image?: string;
  structuredData?: object;
  canonical?: string;
}

export const SEO = ({ 
  title, 
  description, 
  url = "https://govjobs-portal.com",
  type = "website",
  image = "https://govjobs-portal.com/og-image.png",
  structuredData,
  canonical
}: SEOProps) => {
  const fullTitle = title.includes('GovJobs Portal') ? title : `${title} | GovJobs Portal`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="GovJobs Portal" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@govjobsportal" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="en" />
      <meta name="author" content="GovJobs Portal" />
      <meta name="keywords" content="government jobs, sarkari naukri, latest jobs, banking jobs, railway jobs, SSC, UPSC" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};
