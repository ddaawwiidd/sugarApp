self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('sugarApp').then(cache => {
      return cache.addAll([
        '/sugarApp/',
       # '/sugarApp/index.html',
        '/sugarApp/css/my.css',
        '/sugarApp/css/normalize.css',
        '/sugarApp/css/skeleton.css',
        '/sugarApp/js/js.js',
        '/sugarApp/images/sugar.png'
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

