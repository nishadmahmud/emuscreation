import { generateMetadata } from '../../lib/seo';
import { generateBreadcrumbSchema } from '../../lib/schema';

export const metadata = generateMetadata({
  title: 'About Us',
  description: 'Learn about Emu\'s Creation - a professional video editing studio with 7+ years of experience, 250+ projects delivered, serving clients in 18+ countries worldwide.',
  path: '/about',
  keywords: [
    'about emu\'s creation',
    'video editing studio',
    'professional editors',
    'video editing team',
    'Dhaka video editor',
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
]);

export default function AboutLayout({ children }) {
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

