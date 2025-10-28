import { generateMetadata as genMeta } from '../../../lib/seo';
import { serviceMetadata } from '../../../lib/seo';

export const metadata = genMeta({
  ...serviceMetadata.wedding,
  path: '/services/wedding',
  type: 'service',
});

export default function WeddingLayout({ children }) {
  return children;
}
