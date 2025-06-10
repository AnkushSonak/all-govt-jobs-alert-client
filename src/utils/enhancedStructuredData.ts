
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
  salary?: string;
}

export const generateJobPostingStructuredData = (job: Job) => {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": `${job.title} position in ${job.department}. ${job.totalPosts} positions available. Qualification required: ${job.qualification}`,
    "identifier": {
      "@type": "PropertyValue",
      "name": "GovJobs Portal",
      "value": job.id.toString()
    },
    "datePosted": new Date().toISOString().split('T')[0],
    "validThrough": job.applyDeadline,
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": job.department,
      "sameAs": "https://govjobs-portal.com"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.location.split(',')[0],
        "addressRegion": job.location.split(',')[1]?.trim() || job.location,
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
    "industry": job.category,
    "url": `https://govjobs-portal.com/jobs/${job.id}`,
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
    "description": "Your Gateway to Government Careers - Latest Government Job Notifications",
    "url": "https://govjobs-portal.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://govjobs-portal.com/jobs?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GovJobs Portal",
      "url": "https://govjobs-portal.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://govjobs-portal.com/logo.png"
      },
      "sameAs": [
        "https://facebook.com/govjobsportal",
        "https://twitter.com/govjobsportal",
        "https://linkedin.com/company/govjobsportal"
      ]
    }
  };
};

export const generateOrganizationStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GovJobs Portal",
    "url": "https://govjobs-portal.com",
    "logo": "https://govjobs-portal.com/logo.png",
    "description": "Leading platform for government job opportunities across India",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Delhi",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-1800-XXX-XXXX",
      "contactType": "customer service",
      "email": "support@govjobsportal.com"
    },
    "sameAs": [
      "https://facebook.com/govjobsportal",
      "https://twitter.com/govjobsportal",
      "https://linkedin.com/company/govjobsportal"
    ]
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
