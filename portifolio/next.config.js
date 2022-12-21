/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // allow ts files outside dir folder
    // https://github.com/vercel/next.js/issues/9474
    externalDir: true,
  },
};

module.exports = nextConfig;
