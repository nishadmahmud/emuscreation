import { generateMetadata } from '../../lib/seo';

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

export default function TestimonialsLayout({ children }) {
  return children;
}
