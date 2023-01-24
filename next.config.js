/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'res.cloudinary.com']
  },
  trailingSlash: true
}

module.exports = nextConfig
