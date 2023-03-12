/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["langavi-product-pictures.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
