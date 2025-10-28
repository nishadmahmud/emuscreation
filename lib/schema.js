/**
 * Schema.org JSON-LD Markup Generator
 * Helps search engines understand the website structure and content
 */

const BASE_URL = 'https://emuscreation.com';

// Organization Schema (appears on all pages)
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Emu's Creation",
  "alternateName": "Emus Creation Video Editing",
  "url": BASE_URL,
  "logo": `${BASE_URL}/logo.png`,
  "description": "Professional video editing studio specializing in weddings, reels, YouTube content, travel vlogs, and corporate videos.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dhaka",
    "addressCountry": "BD",
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+880-1743-025398",
    "contactType": "Customer Service",
    "areaServed": "Worldwide",
    "availableLanguage": ["English", "Bengali"],
  },
  "sameAs": [
    "https://www.linkedin.com/company/emu-s-creation",
    "https://www.youtube.com/@emuscreation1646",
    "https://www.facebook.com/emuscreation/",
    "https://vimeo.com/user91230351",
    "https://www.fiverr.com/users/mehediemu",
  ],
};

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Emu's Creation",
  "url": BASE_URL,
  "description": "Professional video editing services for weddings, social media, YouTube, and corporate content",
  "publisher": organizationSchema,
};

// Service Schema Generator
export const generateServiceSchema = ({
  name,
  description,
  serviceType,
  offers = [],
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": serviceType,
  "name": name,
  "description": description,
  "provider": organizationSchema,
  "areaServed": {
    "@type": "Place",
    "name": "Worldwide",
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": `${name} Packages`,
    "itemListElement": offers.map((offer) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": offer.name,
        "description": offer.description,
      },
      "price": offer.price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
    })),
  },
});

// Breadcrumb Schema Generator
export const generateBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `${BASE_URL}${item.url}`,
  })),
});

// Video Schema Generator
export const generateVideoSchema = ({
  title,
  description,
  thumbnailUrl,
  uploadDate,
  contentUrl,
  duration,
}) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": title,
  "description": description,
  "thumbnailUrl": thumbnailUrl,
  "uploadDate": uploadDate,
  "contentUrl": contentUrl,
  "duration": duration,
  "publisher": organizationSchema,
});

// FAQ Schema Generator
export const generateFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
});

// Review/Rating Schema Generator
export const generateReviewSchema = (reviews) => ({
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "itemReviewed": organizationSchema,
  "ratingValue": reviews.averageRating,
  "reviewCount": reviews.count,
  "bestRating": "5",
  "worstRating": "1",
});

// Article/Blog Post Schema Generator
export const generateArticleSchema = ({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author = "Emu's Creation",
  category,
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": title,
  "description": description,
  "image": image,
  "datePublished": datePublished,
  "dateModified": dateModified || datePublished,
  "author": {
    "@type": "Organization",
    "name": author,
  },
  "publisher": organizationSchema,
  "articleSection": category,
});

// Helper to create Schema Script Tag
export const createSchemaScript = (schema) => {
  return {
    type: 'application/ld+json',
    children: JSON.stringify(schema),
  };
};

