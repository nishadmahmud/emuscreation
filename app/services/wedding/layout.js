import { generateMetadata as genMeta } from '../../../lib/seo';
import { serviceMetadata } from '../../../lib/seo';
import { generateServiceSchema, generateBreadcrumbSchema } from '../../../lib/schema';

export const metadata = genMeta({
  ...serviceMetadata.wedding,
  path: '/services/wedding',
  type: 'service',
});

const serviceSchema = generateServiceSchema({
  name: 'Wedding Video Editing',
  description: 'Professional wedding video editing with cinematic color grading, emotional storytelling, and slow-motion sequences.',
  serviceType: 'Video Production Service',
  offers: [
    {
      name: 'Cinematic Highlight Film Editing',
      description: 'Wedding Highlight 2-3 minutes with color grading and sound design',
      price: '200',
    },
    {
      name: 'Cinematic Wedding Documentary',
      description: 'Wedding Highlight Maximum 10-15 minutes with full features',
      price: '350',
    },
    {
      name: 'Teaser, Highlight and Full Body',
      description: '1 min teaser, 3-5 min highlight and 20-30 min full body',
      price: '550',
    },
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Wedding Video Editing', url: '/services/wedding' },
]);

export default function WeddingLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, breadcrumbSchema]),
        }}
      />
      {children}
    </>
  );
}

