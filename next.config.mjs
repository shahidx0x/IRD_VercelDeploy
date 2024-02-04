/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "duaruqyah.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
