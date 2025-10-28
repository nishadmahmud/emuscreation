import { generateMetadata } from '../../lib/seo';
import { generateBreadcrumbSchema, generateReviewSchema } from '../../lib/schema';

export const metadata = generateMetadata({
  title: 'Client Testimonials & Reviews',
  description: 'Read reviews from our satisfied clients worldwide. See why businesses and individuals trust Emu\'s Creation for professional video editing services.',
  path: '/testimonials',
  keywords: [
    'video editing reviews',
    'client testimonials',
    'video editor feedback',
    'customer reviews',
    '5-star video editor',
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Testimonials', url: '/testimonials' },
]);

const reviewSchema = generateReviewSchema({
  averageRating: '4.9',
  count: 150,
});

export default function TestimonialsLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, reviewSchema]),
        }}
      />
      {children}
    </>
  );
}

