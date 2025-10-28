import { generateMetadata } from '../../lib/seo';

export const metadata = generateMetadata({
  title: 'Pricing & Packages',
  description: 'Transparent pricing for professional video editing services. Wedding editing from $200, Reels from $60, YouTube editing from $175. View all packages and pricing.',
  path: '/pricing',
  keywords: [
    'video editing pricing',
    'video editor rates',
    'affordable video editing',
    'video editing packages',
    'wedding video editing cost',
  ],
});

export default function PricingLayout({ children }) {
  return children;
}
