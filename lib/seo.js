/**
 * SEO Metadata Generator for Emu's Creation
 * Provides consistent metadata across all pages
 */

const BASE_URL = 'https://emuscreation.com';
const SITE_NAME = "Emu's Creation";
const DEFAULT_DESCRIPTION = "Professional video editing studio specializing in weddings, reels, YouTube content, travel vlogs, and corporate videos. Cinematic quality with fast turnaround.";

export const generateMetadata = ({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '',
  image = '/og-default.jpg',
  type = 'website',
  keywords = [],
  noIndex = false,
}) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const url = `${BASE_URL}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`;

  const defaultKeywords = [
    'video editing',
    'professional video editor',
    'wedding video editing',
    'YouTube editing',
    'Instagram reels editing',
    'corporate video',
    'video editing services',
    'Dhaka Bangladesh',
  ];

  const allKeywords = [...defaultKeywords, ...keywords].join(', ');

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      locale: 'en_US',
      url,
      title: fullTitle,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title || SITE_NAME,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: '@emuscreation',
    },
    other: {
      'og:phone_number': '+880-1743-025398',
      'og:email': 'contact@emuscreation.com',
      'og:locality': 'Dhaka',
      'og:country-name': 'Bangladesh',
    },
  };
};

// Service-specific metadata templates
export const serviceMetadata = {
  wedding: {
    title: 'Wedding Video Editing Services',
    description: 'Professional wedding video editing with cinematic color grading, emotional storytelling, and slow-motion sequences. Transform your special day into a cinematic masterpiece. Starting from $200.',
    keywords: [
      'wedding video editing',
      'cinematic wedding videos',
      'wedding highlight reel',
      'wedding film editing',
      'destination wedding videos',
    ],
  },
  reels: {
    title: 'Reels & Short-Form Video Editing',
    description: 'Create viral-worthy Instagram Reels and TikTok videos with trending transitions, perfect beat sync, and engaging visual effects. Starting from $60.',
    keywords: [
      'Instagram reels editing',
      'TikTok video editing',
      'short-form content',
      'viral reels',
      'social media video editing',
    ],
  },
  youtube: {
    title: 'YouTube Video Editing Services',
    description: 'Professional YouTube video editing with dynamic cuts, engaging graphics, and strategic pacing to boost viewer retention. Starting from $175.',
    keywords: [
      'YouTube video editing',
      'YouTube editor',
      'video editing for YouTubers',
      'professional YouTube editing',
      'channel growth editing',
    ],
  },
  travel: {
    title: 'Travel Vlog Video Editing',
    description: 'Epic travel vlog editing with drone footage integration, adventure storytelling, and cinematic transitions. Showcase your destinations beautifully. Starting from $530.',
    keywords: [
      'travel vlog editing',
      'travel video editor',
      'drone footage editing',
      'adventure video editing',
      'travel content creation',
    ],
  },
  corporate: {
    title: 'Corporate & Documentary Video Editing',
    description: 'Professional corporate video and documentary editing with clean cuts, modern transitions, and compelling storytelling. Starting from $505.',
    keywords: [
      'corporate video editing',
      'documentary editing',
      'business video production',
      'promotional video editing',
      'professional video editing',
    ],
  },
};

