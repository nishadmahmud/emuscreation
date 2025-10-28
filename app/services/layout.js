import { generateMetadata } from '../../lib/seo';

export const metadata = generateMetadata({
  title: 'Video Editing Services',
  description: 'Professional video editing services for weddings, reels, YouTube, travel vlogs, and corporate content. Expert editors, fast turnaround, competitive pricing.',
  path: '/services',
  keywords: [
    'video editing services',
    'professional video editor',
    'video production',
    'editing services online',
    'freelance video editor',
  ],
});

export default function ServicesLayout({ children }) {
  return children;
}
