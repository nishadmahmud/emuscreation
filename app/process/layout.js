import { generateMetadata } from '../../lib/seo';

export const metadata = generateMetadata({
  title: 'Our Editing Process',
  description: 'Learn about our 5-step video editing workflow from brief to final delivery. Transparent, efficient, and collaborative process ensuring perfect results every time.',
  path: '/process',
  keywords: [
    'video editing workflow',
    'editing process',
    'how video editing works',
    'video production process',
    'post-production workflow',
  ],
});

export default function ProcessLayout({ children }) {
  return children;
}
