
interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  qualification: string;
  applyDeadline: string;
  totalPosts: number;
  sourceUrl: string;
  category: string;
  slug: string;
  salary?: string;
  description?: string;
}

export const generateJobStructuredData = (job: Job) => {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description || `${job.title} position at ${job.department}. Apply before ${job.applyDeadline}.`,
    "identifier": {
      "@type": "PropertyValue",
      "name": job.department,
      "value": job.id.toString()
    },
    "datePosted": new Date().toISOString(),
    "validThrough": job.applyDeadline,
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": job.department,
      "sameAs": job.sourceUrl
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.location,
        "addressCountry": "IN"
      }
    },
    "baseSalary": job.salary ? {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": {
        "@type": "QuantitativeValue",
        "value": job.salary
      }
    } : undefined,
    "qualifications": job.qualification,
    "url": `https://govjobs-portal.com/jobs/${job.slug}-${job.id}`,
    "applicationContact": {
      "@type": "ContactPoint",
      "url": job.sourceUrl
    }
  };
};

export const generateWebsiteStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "GovJobs Portal",
    "description": "Latest Government Job Notifications India - Find Banking, Railways, SSC, UPSC and State Government Jobs",
    "url": "https://govjobs-portal.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://govjobs-portal.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GovJobs Portal",
      "url": "https://govjobs-portal.com"
    }
  };
};

export const generateBreadcrumbStructuredData = (items: Array<{name: string, url: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};
