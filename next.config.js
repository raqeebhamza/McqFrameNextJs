/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
const nextConfig = {
  reactStrictMode: true,
  i18n:{
    locales:['en','fr'],
    defaultLocale:'en'
  }, 
}
module.exports = nextConfig
