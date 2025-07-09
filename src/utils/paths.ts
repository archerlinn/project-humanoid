// Utility function to handle basePath for GitHub Pages
export function getAssetPath(path: string): string {
  // In production (GitHub Pages), we need to include the basePath
  if (process.env.NODE_ENV === 'production') {
    return `/project-humanoid${path}`;
  }
  // In development, use the path as-is
  return path;
} 