import { generateMetadata } from '../../lib/seo';
import { generateBreadcrumbSchema, generateFAQSchema } from '../../lib/schema';

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

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'FAQ', url: '/faq' },
]);

// Common FAQs for schema
const faqSchema = generateFAQSchema([
  {
    question: 'What is your typical turnaround time?',
    answer: 'Turnaround times vary by service: Reels (2-3 days), Wedding highlights (5-7 days), YouTube content (7-10 days). Rush delivery available for urgent projects.',
  },
  {
    question: 'How many revisions do you offer?',
    answer: 'All packages include at least 2 revisions. Additional revisions can be purchased if needed. We work closely with you to ensure satisfaction.',
  },
  {
    question: 'What video formats do you accept?',
    answer: 'We accept all major video formats including MP4, MOV, AVI, MKV. We can work with footage from any camera or smartphone.',
  },
  {
    question: 'Do you provide music licensing?',
    answer: 'Yes, many packages include commercially licensed music tracks. We can also work with your provided music or help source the perfect track.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept payments through Fiverr, PayPal, Wise, and bank transfer. International payments are welcome.',
  },
]);

export default function FAQLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, faqSchema]),
        }}
      />
      {children}
    </>
  );
}

