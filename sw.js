const CACHE_NAME = 'rudra-tours-pwa-v1';
const OFFLINE_URL = '/offline.html';
const CORE_ASSETS = [
  "/",
  "/buddhistcircuit/",
  "/chardham/",
  "/conferencetours/",
  "/corporatetours/",
  "/css/style.css",
  "/familytours/",
  "/footer.html",
  "/goa/",
  "/goldentriangle/",
  "/gujarat/",
  "/header.html",
  "/himachal/",
  "/icons/icon-192-maskable.png",
  "/icons/icon-192.png",
  "/icons/icon-512-maskable.png",
  "/icons/icon-512.png",
  "/img/theme-1/logo.png",
  "/img/theme-1/logo_dark.png",
  "/js/main.js",
  "/kashmir/",
  "/manifest.webmanifest",
  "/nepal/",
  "/northeast/",
  "/offline.html",
  "/pilgrimagetours/",
  "/rajasthan/",
  "/shirdisaibabashanishingnapur/",
  "/studenttours/",
  "/uttaranchal/",
  "/vaishnodevi/",
  "/varanasi/"
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(key => key !== CACHE_NAME ? caches.delete(key) : Promise.resolve())))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request).then(cached => cached || caches.match(OFFLINE_URL)))
    );
    return;
  }

  if (/\.(?:png|jpg|jpeg|webp|gif|svg|css|js|webmanifest|ico)$/i.test(url.pathname)) {
    event.respondWith(
      caches.match(request).then(cached => cached || fetch(request).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        return response;
      }).catch(() => cached))
    );
  }
});
