// src/components/SEO.tsx
import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  keywords?: string | string[];
  jsonLd?: object; // optional JSON-LD structured data
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  url,
  image,
  keywords = [],
  jsonLd,
}) => {
  // Default keywords (from your keyword report)
  const defaultKeywords = [
    "Seed Savers Network Kenya",
    "Seed Savers Kenya",
    "community seed saving Kenya",
    "indigenous seed preservation Kenya",
    "agro-biodiversity Kenya",
    "traditional seeds Kenya",
    "heirloom seeds Kenya",
    "community seed banks Kenya",
    "farmer-led seed management",
    "agroecology training Kenya",
    "food security Kenya",
    "food sovereignty Kenya",
    "seed sovereignty Kenya",
    "seed school Kenya",
    "farmers rights Kenya",
    "rural women in agriculture Kenya",
  ];

  const keywordList = Array.isArray(keywords)
  ? keywords
  : keywords
  ? [keywords]  // convert a single string into an array
  : [];

const allKeywords = [...defaultKeywords, ...keywordList].join(", ");

  return (
    <Helmet>
      {/* Page Title */}
      <title>{title}</title>

      {/* Basic SEO */}
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />

      {/* Canonical Tag */}
      {url && <link rel="canonical" href={url} />}

      {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Robots */}
      <meta name="robots" content="index, follow" />

      {/* Optional JSON-LD schema */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
