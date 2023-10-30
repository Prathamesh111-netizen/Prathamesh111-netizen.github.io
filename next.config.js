/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // output : 'export'
  // experimental: {
  //   serverActions: true,
  // },
};

module.exports = nextConfig;
