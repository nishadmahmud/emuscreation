import { generateMetadata as genMeta } from '../../../lib/seo';
import { serviceMetadata } from '../../../lib/seo';

export const metadata = genMeta({
  ...serviceMetadata.youtube,
  path: '/services/youtube',
  type: 'service',
});

export default function YouTubeLayout({ children }) {
  return children;
}
