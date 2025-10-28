import { generateMetadata as genMeta } from '../../../lib/seo';
import { serviceMetadata } from '../../../lib/seo';

export const metadata = genMeta({
  ...serviceMetadata.travel,
  path: '/services/travel',
  type: 'service',
});

export default function TravelLayout({ children }) {
  return children;
}
