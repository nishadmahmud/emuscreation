import { generateMetadata } from '../../lib/seo';
import { generateBreadcrumbSchema } from '../../lib/schema';

export const metadata = generateMetadata({
  title: 'Video Editing Portfolio',
  description: 'Explore our portfolio of professionally edited videos including weddings, documentaries, reels, corporate content, and travel vlogs. See the quality of our cinematic editing work.',
  path: '/portfolio',
  keywords: [
    'video editing portfolio',
    'video editor showcase',
    'professional video samples',
    'wedding video samples',
    'editing examples',
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Portfolio', url: '/portfolio' },
]);

export default function PortfolioLayout({ children }) {
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

