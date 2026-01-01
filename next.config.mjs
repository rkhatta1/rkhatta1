/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
    output: 'export',
    basePath: isDev ? '' : '/rkhatta1',
    assetPrefix: isDev ? '' : '/rkhatta1/',
    images: {
      unoptimized: true,
      domains: ['github.io'],
    },
    trailingSlash: true, 
  };
  
  export default nextConfig;
