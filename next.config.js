/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      // Configuration options for experimental server actions
    },
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    // Configuration options for images
    domains: [
      "img.clerk.com",
      "images.clerk.dev",
      "uploadthing.com",
      "placehold.co",
    ],
  },
};

module.exports = nextConfig;
