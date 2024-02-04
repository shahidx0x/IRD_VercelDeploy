/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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
