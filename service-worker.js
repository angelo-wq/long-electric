const CACHE_NAME = "v3";
const urlsToCache = [
  "index.html",
  "contacto.css",
  "contacto.js",
  "contacto.html",
  "main.js",
  "proyectos.html",
  "style.css",
  "manifest.json",
  "icon_web.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
  console.log("✅ Service Worker instalado");
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
