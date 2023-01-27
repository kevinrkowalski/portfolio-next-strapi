/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  images: {
    domains: ['localhost', 'res.cloudinary.com']
  },
  trailingSlash: true
}

module.exports = nextConfig
