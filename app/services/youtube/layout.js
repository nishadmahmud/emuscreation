import { generateMetadata as genMeta } from '../../../lib/seo';
import { serviceMetadata } from '../../../lib/seo';
import { generateServiceSchema, generateBreadcrumbSchema } from '../../../lib/schema';

export const metadata = genMeta({
  ...serviceMetadata.youtube,
  path: '/services/youtube',
  type: 'service',
});

const serviceSchema = generateServiceSchema({
  name: 'YouTube Video Editing',
  description: 'Professional YouTube video editing with dynamic cuts and engaging graphics to boost viewer retention.',
  serviceType: 'Video Production Service',
  offers: [
    {
      name: 'Basic Package',
      description: '1 min Long 2 short reel Editing',
      price: '175',
    },
    {
      name: 'Standard Package',
      description: '1 Min Long to 5 reels editing',
      price: '320',
    },
    {
      name: 'Premium Package',
      description: '1 min long 10 reels editing',
      price: '445',
    },
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'YouTube Editing', url: '/services/youtube' },
]);

export default function YouTubeLayout({ children }) {
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

