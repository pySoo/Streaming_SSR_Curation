/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    imageSizes: [16, 32],
    deviceSizes: [250, 500],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shopping-phinf.pstatic.net',
      },
      {
        protocol: 'https',
        hostname: 'openweathermap.org',
      },
    ],
  },
};

module.exports = nextConfig;
