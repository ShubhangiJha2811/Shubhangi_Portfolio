import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Shubhangi Jha - Full Stack Developer & AI Enthusiast',
  description = 'Portfolio of Shubhangi Jha - B-Tech IT student skilled in Full Stack Development, AI/ML, and Cybersecurity. Explore my projects, skills, and experience.',
  keywords = 'Shubhangi Jha, Full Stack Developer, AI, Machine Learning, Cybersecurity, React, Node.js, Python, Web Development, Portfolio',
  image = 'https://your-domain.com/og-image.jpg',
  url = 'https://your-domain.com',
  type = 'website'
}) => {
  const siteTitle = title.includes('Shubhangi Jha') ? title : `${title} | Shubhangi Jha`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Shubhangi Jha" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#667eea" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Shubhangi Jha Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@shubhangijha" />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
