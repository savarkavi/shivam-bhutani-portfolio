import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "5ct1dh56fd.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
