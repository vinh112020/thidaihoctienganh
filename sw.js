const CACHE_NAME = 'my-app-cache-v1';
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(['/', '/index.html', '/styles.css']))
  );
});
