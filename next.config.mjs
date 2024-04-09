/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "sayurmoms.test",
      },
    ],
  },
};

export default nextConfig;
