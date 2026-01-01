import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
    output: 'export',  // Required for GitHub Pages static export
    basePath: isDev ? '' : '/rkhatta1',
    assetPrefix: isDev ? '' : '/rkhatta1/',
    images: {
      unoptimized: true, // For static export
      domains: ['github.io'],
    },
    trailingSlash: true, 
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
};

const withMDX = createMDX({
  options: {},
})
  
export default withMDX(nextConfig);
