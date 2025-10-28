import { generateMetadata } from '../../lib/seo';
import { generateBreadcrumbSchema } from '../../lib/schema';

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

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
]);

export default function ServicesLayout({ children }) {
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

