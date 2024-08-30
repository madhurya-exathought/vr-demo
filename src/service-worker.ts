/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate ,CacheFirst} from 'workbox-strategies';

declare const self: ServiceWorkerGlobalScope;


clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);

const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');

// Large image caching
registerRoute(
  ({ request }) => request.destination === 'image' && 
    (request.url.includes('Bay') || request.url.includes('Entrance') || 
     request.url.includes('Room') || request.url.includes('sky')),
  new CacheFirst({
    cacheName: 'large-images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 15,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);

registerRoute(
  ({ request, url }: { request: Request; url: URL }) => {
    if (request.mode !== 'navigate') {
      return false;
    }
    if (url.pathname.startsWith('/_')) {
      return false;
    }
    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    }
    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);


// An example runtime caching route for requests that aren't handled by the
// precache, in this case same-origin .png requests like those from in public/
  // Add in any other file extensions or routing criteria as needed.
registerRoute(
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.png'),
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [new ExpirationPlugin({ maxEntries: 50 })],
  })
);


// Preload images
const imagesToPreload = [
  '/assets/images/exathought/Bay1.jpg',
  '/assets/images/exathought/Bay2.jpg',
  '/assets/images/exathought/Bay3.jpg',
 '/assets/images/exathought/Entrance2Rooms.jpg',
 '/assets/images/exathought/EntranceInside.jpg',
 '/assets/images/exathought/EntranceOutside.jpg',
 '/assets/images/exathought/InsidePathway.jpg',
 '/assets/images/exathought/MeetingRoomBig.jpg',
 '/assets/images/exathought/MeetingRoomBig2.jpg',
 '/assets/images/exathought/RoomAtEntrance.jpg',
 '/assets/images/exathought/RoomLeft.jpg',
 '/assets/images/exathought/RoomRight.jpg',
 '/assets/images/sky/sky1.jpg'

];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('preloaded-images').then((cache) => {
      return cache.addAll(imagesToPreload);
    })
  );
});

// Intercept fetch requests and respond with preloaded images if available
self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});


self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});