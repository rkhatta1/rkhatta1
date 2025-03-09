/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Required for GitHub Pages static export
    // Update the basePath to match your GitHub repo name
    basePath: '/rkhatta1', // Replace REPO_NAME with your actual GitHub repository name
    assetPrefix: '/rkhatta1/', // Replace REPO_NAME with your actual GitHub repository name
    images: {
      unoptimized: true, // For static export
      // This ensures images have the correct path in the static export
      domains: ['github.io'],
    },
    // This ensures trailing slashes are handled correctly
    trailingSlash: true, 
  };
  
  export default nextConfig;