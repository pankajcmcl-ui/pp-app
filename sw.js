// Service Worker — bust cache on every update
const CACHE_NAME = 'pp-cache-v4.3-' + Date.now();
const URLS_TO_CACHE = ['./', './index.html', './manifest.json'];

self.addEventListener('install', e => {
  // Take over immediately, skip waiting
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener('activate', e => {
  // Delete ALL old caches
  e.waitUntil(
    caches.keys().then(keys => 
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Network-first strategy: always try fresh, fall back to cache
  e.respondWith(
    fetch(e.request)
      .then(resp => {
        // Update cache with fresh response
        if (e.request.method === 'GET') {
          const respClone = resp.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, respClone));
        }
        return resp;
      })
      .catch(() => caches.match(e.request))
  );
});
