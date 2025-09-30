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
};

export default nextConfig;
