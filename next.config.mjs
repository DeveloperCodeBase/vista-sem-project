// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: []
  },
  experimental: {
    optimizeCss: true
  }
};

export default nextConfig;
