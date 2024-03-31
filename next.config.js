/** @type {import('next').NextConfig} */
const withPWAInit = require("next-pwa");

const isDev = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
};

const withPWA = withPWAInit({
  dest: "public",
  sw: "service-worker.js",
  disable: isDev,
  register: true,
  skipWaiting: true,
  exclude: [
    ({ asset, compilation }) => {
      if (
        asset.name.startsWith("server/") ||
        asset.name.match(/^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/)
      ) {
        return true;
      }
      if (isDev && !asset.name.startsWith("static/runtime/")) {
        return true;
      }
      return false;
    }
  ],
});

module.exports = withPWA(nextConfig);
