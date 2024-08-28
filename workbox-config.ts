module.exports = {
    globDirectory: 'build/',
    globPatterns: ['**/*.{js,ts,css,html,png,jpg,jpeg,svg}'],
    swDest: 'build/service-worker.js',
    clientsClaim: true,
    skipWaiting: true,
  };