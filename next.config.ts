import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
   domains: ['avatars.githubusercontent.com'],
   remotePatterns: [
    {
      protocol: "https",
      hostname: "ik.imagekit.io",
      port: "",
    },
  ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '50mb',
    },
  },
};

export default nextConfig;
