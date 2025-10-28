import { generateMetadata as genMeta } from '../../../lib/seo';
import { serviceMetadata } from '../../../lib/seo';
import { generateServiceSchema, generateBreadcrumbSchema } from '../../../lib/schema';

export const metadata = genMeta({
  ...serviceMetadata.corporate,
  path: '/services/corporate',
  type: 'service',
});

const serviceSchema = generateServiceSchema({
  name: 'Corporate & Documentary Video Editing',
  description: 'Professional corporate and documentary editing with clean cuts and compelling storytelling.',
  serviceType: 'Video Production Service',
  offers: [
    {
      name: 'Basic Package',
      description: '1 Min Film edit - Short Teaser (1-2 min)',
      price: '505',
    },
    {
      name: 'Standard Package',
      description: '5 Min film edit - Highlight (3-5 min)',
      price: '700',
    },
    {
      name: 'Premium Package',
      description: '10 Min film edit - Full Film (up to 60 min)',
      price: '1510',
    },
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Corporate & Documentary', url: '/services/corporate' },
]);

export default function CorporateLayout({ children }) {
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

