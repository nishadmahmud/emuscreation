import { generateMetadata } from '../../lib/seo';

export const metadata = generateMetadata({
  title: 'Video Editing Blog & Tips',
  description: 'Expert insights, tips, and tutorials on video editing. Learn about wedding videography, social media content creation, color grading, and more from professional editors.',
  path: '/blog',
  keywords: [
    'video editing blog',
    'editing tutorials',
    'video editing tips',
    'filmmaking blog',
    'editing techniques',
  ],
});

export default function BlogLayout({ children }) {
  return children;
}
