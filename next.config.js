/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
};

const withPWA = require("next-pwa")({
  dest: "public",
  sw: "sw.js",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
	buildExcludes: [/middleware-manifest.json$/]
});

module.exports = withPWA(nextConfig);
