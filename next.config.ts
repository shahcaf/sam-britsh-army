import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/sam-britsh-army",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
