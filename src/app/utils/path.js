/**
 * Utility to get the correct base path for assets and links
 * This ensures paths work both in development and when deployed to GitHub Pages
 */
export function getBasePath(path) {
    // Remove any leading slash to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    
    // In development, we can just use the path as is
    if (process.env.NODE_ENV === 'development') {
      return `/${cleanPath}`;
    }
    
    // In production, we need to add the basePath from next.config
    // You can hard-code your repo name here for simplicity
    const REPO_NAME = 'rkhatta1'; // Replace with your actual repo name
    
    return `/${REPO_NAME}/${cleanPath}`;
  }
