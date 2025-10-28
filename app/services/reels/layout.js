import { generateMetadata as genMeta } from '../../../lib/seo';
import { serviceMetadata } from '../../../lib/seo';

export const metadata = genMeta({
  ...serviceMetadata.reels,
  path: '/services/reels',
  type: 'service',
});

export default function ReelsLayout({ children }) {
  return children;
}
