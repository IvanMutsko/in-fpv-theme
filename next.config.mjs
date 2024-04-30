/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.YOUTUBE_API_KEY,
  },
  images: {
    domains: ["i.ytimg.com"],
  },
};

export default nextConfig;
