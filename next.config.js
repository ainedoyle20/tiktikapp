/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn3d.iconscout.com", "lh3.googleusercontent.com"],
  }
}

module.exports = nextConfig
