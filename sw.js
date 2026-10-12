---

### 3. Sobre el `sw.js` (Service Worker)
El archivo `sw.js` que tienes funciona perfecto[cite: 10], ya que se encarga de guardar en caché la página principal (`index.html`) para que cargue ultra rápido:

```javascript
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("adonay-cache").then(function(cache) {
      return cache.addAll([
        "./",
        "./index.html"
      ]);
    })
  );
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});