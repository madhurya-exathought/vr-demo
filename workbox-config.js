module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,ico,html,png,webmanifest,txt,css,js,jpg,mp3}'
	],
	maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // 10 MB limit
	swDest: 'build/service-worker.js',
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

