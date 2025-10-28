import { generateMetadata } from '../../lib/seo';
import { generateBreadcrumbSchema } from '../../lib/schema';

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

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Pricing', url: '/pricing' },
]);

export default function PricingLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {children}
    </>
  );
}

