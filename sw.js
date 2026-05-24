var CACHE = 'pp-fb-v1';
var ASSETS = ['./','./index.html','./manifest.json'];
self.addEventListener('install', function(e){ e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(ASSETS); })); self.skipWaiting(); });
self.addEventListener('activate', function(e){ self.clients.claim(); });
self.addEventListener('fetch', function(e){
  if (e.request.url.includes('firebaseio.com') || e.request.url.includes('googleapis.com')) {
    e.respondWith(fetch(e.request));
    return;
  }
  e.respondWith(caches.match(e.request).then(function(r){ return r || fetch(e.request); }));
});
