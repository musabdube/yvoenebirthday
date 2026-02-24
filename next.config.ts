import type { NextConfig } from "next";

const repositoryName = "yvoenebirthday";
const isProduction = process.env.NODE_ENV === "production";
const basePath = isProduction ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
};

export default nextConfig;
