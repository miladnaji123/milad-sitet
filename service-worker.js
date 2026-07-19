const CACHE_NAME = "calm-app-v1";

const urlsToCache = [
  "/milad-sitet/",
  "/milad-sitet/index.html",
  "/milad-sitet/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
