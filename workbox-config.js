module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,ico,html,png,webmanifest,txt,js,css,jpg,mp3}'
	],
	swDest: 'build/service-worker.js',
	maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // 10 MB limit
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	runtimeCaching: [
		{
		  urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/, // Cache images with these extensions
		  handler: 'CacheFirst',
		  options: {
			cacheName: 'images-cache',
			expiration: {
			  maxEntries: 50, // Number of images to cache
			  maxAgeSeconds: 30 * 24 * 60 * 60, // Cache for 30 days
			},
		  },
		},
	  ],
	};