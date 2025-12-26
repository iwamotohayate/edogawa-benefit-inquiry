/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BENEFIT_API_URL: process.env.BENEFIT_API_URL,
    BENEFIT_API_KEY: process.env.BENEFIT_API_KEY,
  },
}

module.exports = nextConfig
