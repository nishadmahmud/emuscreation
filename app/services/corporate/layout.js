import { generateMetadata as genMeta } from '../../../lib/seo';
import { serviceMetadata } from '../../../lib/seo';

export const metadata = genMeta({
  ...serviceMetadata.corporate,
  path: '/services/corporate',
  type: 'service',
});

export default function CorporateLayout({ children }) {
  return children;
}

