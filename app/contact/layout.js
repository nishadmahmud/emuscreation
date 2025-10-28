import { generateMetadata } from '../../lib/seo';

export const metadata = generateMetadata({
  title: 'Contact Us',
  description: 'Get in touch with Emu\'s Creation for professional video editing services. Contact via Fiverr, WhatsApp, or social media. Based in Dhaka, Bangladesh, serving clients worldwide.',
  path: '/contact',
  keywords: [
    'contact video editor',
    'hire video editor',
    'video editing inquiry',
    'get quote video editing',
    'Dhaka video editor contact',
  ],
});

export default function ContactLayout({ children }) {
  return children;
}
