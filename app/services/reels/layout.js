import { generateMetadata as genMeta } from '../../../lib/seo';
import { serviceMetadata } from '../../../lib/seo';
import { generateServiceSchema, generateBreadcrumbSchema } from '../../../lib/schema';

export const metadata = genMeta({
  ...serviceMetadata.reels,
  path: '/services/reels',
  type: 'service',
});

const serviceSchema = generateServiceSchema({
  name: 'Reels & Short-Form Video Editing',
  description: 'Create viral-worthy Instagram Reels and TikTok videos with trending transitions and perfect beat sync.',
  serviceType: 'Video Production Service',
  offers: [
    {
      name: 'Basic Package',
      description: '1 short reel or TikTok edit with trendy cuts and sound sync',
      price: '60',
    },
    {
      name: 'Standard Package',
      description: 'Up to 3 reels or TikToks with smooth transitions and text effects',
      price: '150',
    },
    {
      name: 'Premium Package',
      description: '5 reels or TikToks with viral edits, motion graphics, and sound design',
      price: '250',
    },
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Reels & Short-Form', url: '/services/reels' },
]);

export default function ReelsLayout({ children }) {
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

