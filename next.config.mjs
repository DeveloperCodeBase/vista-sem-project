// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["source.unsplash.com", "images.unsplash.com"]
  },
    experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
