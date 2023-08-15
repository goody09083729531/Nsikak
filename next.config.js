/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
    loader: 'default',
    path: '/_next/image',
    deviceSizes: [320, 640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    disableStaticImages: true,
    remotePatterns: [
      {
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
        protocol: 'https',
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig,
};
