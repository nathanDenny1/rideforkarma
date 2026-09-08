import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/rideforkarma",
  output: "export",
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
