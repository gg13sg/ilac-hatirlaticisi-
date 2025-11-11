self.addEventListener("install", e=>{
  e.waitUntil(caches.open("ilac-pwa-v1").then(c=>c.addAll([
    "./","./index.html","./manifest.webmanifest","./sw.js",
    "./icons/icon-192.png","./icons/icon-512.png","./sounds/chime.mp3"
  ])));
});
self.addEventListener("fetch", e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
