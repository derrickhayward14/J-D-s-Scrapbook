/** @type {import('next').NextConfig} */
const repo = process.env.NEXT_PUBLIC_REPO_NAME || "J-D-s-Scrapbook";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};

module.exports = nextConfig;