// Service worker file - Using MDN tutorial
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/arrow_down.svg',
        '/bundle.js',
        '/index.html',
      ]);
    }).catch((err) => {
      console.log(`Service worker registration failed: ${err}`);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
})