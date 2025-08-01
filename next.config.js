/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    basePath: '/project-humanoid', // important for GitHub Pages
    trailingSlash: true, // needed for proper routing on GH Pages
  }),
};

module.exports = nextConfig;
  