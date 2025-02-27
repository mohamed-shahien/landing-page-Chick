/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  reactStrictMode: true,
  webpack(config) {
    config.optimization = {
      minimize: false,
    };
    return config;
  },
};

module.exports = nextConfig;
