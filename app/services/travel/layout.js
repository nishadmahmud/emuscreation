import { generateMetadata as genMeta } from '../../../lib/seo';
import { serviceMetadata } from '../../../lib/seo';
import { generateServiceSchema, generateBreadcrumbSchema } from '../../../lib/schema';

export const metadata = genMeta({
  ...serviceMetadata.travel,
  path: '/services/travel',
  type: 'service',
});

const serviceSchema = generateServiceSchema({
  name: 'Travel Vlog Video Editing',
  description: 'Epic travel vlog editing with drone footage integration and adventure storytelling.',
  serviceType: 'Video Production Service',
  offers: [
    {
      name: 'Complete Package',
      description: 'Social Media Video Editing + Highlight Film (20-30 min Feature + 5-min Highlight)',
      price: '530',
    },
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Travel Vlog Editing', url: '/services/travel' },
]);

export default function TravelLayout({ children }) {
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

