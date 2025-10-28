import { generateMetadata } from '../../lib/seo';

export const metadata = generateMetadata({
  title: 'Frequently Asked Questions (FAQ)',
  description: 'Common questions about our video editing services, pricing, turnaround times, revisions, file formats, and more. Get all your answers here.',
  path: '/faq',
  keywords: [
    'video editing faq',
    'editing questions',
    'video editing turnaround',
    'revision policy',
    'file formats',
  ],
});

export default function FAQLayout({ children }) {
  return children;
}
