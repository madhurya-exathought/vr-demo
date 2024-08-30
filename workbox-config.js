  module.exports = {
      globDirectory: 'build/',
      globPatterns: ['**/*.{js,ts,css,html,png,jpg,jpeg,svg}'],
      swDest: 'build/service-worker.js',
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 15 * 1024 * 1024, // 15 MB
    };