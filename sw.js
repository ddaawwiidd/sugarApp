self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('sugarApp').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/my.css',
        '/css/normalize.css',
        '/css/skeleton.css',
        '/js/js.js',
        '/images/sugar.png'
      ])
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

