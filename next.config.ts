import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/homepage",
        permanent: true, // set to false if you want temporary redirect
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.rawg.io",
        port: "",
        pathname: "/media/games/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
