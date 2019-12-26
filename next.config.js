module.exports = {
  distDir: 'build',
  webpack: config => {
    config.resolve.modules.push(__dirname);
    return config;
  }
};
