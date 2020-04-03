importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

workbox.routing.registerRoute(
  /\.(?:css|html|js)$/,
  workbox.strategies.staleWhileRevalidate(),
); 
workbox.routing.registerRoute(
  
  /.*\.(?:png|jpg|jpeg|svg|gif)/,
  
  workbox.strategies.cacheFirst({
    
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        
        maxEntries: 20,
        
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);
 workbox.googleAnalytics.initialize(); 
 

self.addEventListener('fetch', function(event) {
 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});