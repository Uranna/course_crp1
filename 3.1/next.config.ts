import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  images: {
    remotePatterns: [{
      hostname: new URL('https://lk.directum.ru/mocks/dev/query/cats/**').hostname,
    }]
  }
};

export default nextConfig;
