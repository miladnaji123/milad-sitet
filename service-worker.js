self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('site-cache').then(function (cache) {
      return cache.addAll([
        '/milad-sitet/',
        '/milad-sitet/index.html'
      ]);
    })
  );
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
