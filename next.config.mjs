/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.YOUTUBE_API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
