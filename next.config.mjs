/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fiverr-res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
