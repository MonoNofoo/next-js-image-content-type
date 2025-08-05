import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://d344q2ej6fb281.cloudfront.net/**')]
  }
};

export default nextConfig;
