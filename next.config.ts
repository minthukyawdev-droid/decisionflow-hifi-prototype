import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/decisionflow-hifi-prototype",
  assetPrefix: "/decisionflow-hifi-prototype/",
  trailingSlash: true,
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
