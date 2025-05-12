/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // تفعيل Strict Mode
  output: 'export', // الإعداد الجديد لعمل Export
  images: {
    unoptimized: true, // دعم الصور في Static Export
  },
};

module.exports = nextConfig;
