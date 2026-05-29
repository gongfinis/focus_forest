// Service Worker - 专注丛林 PWA 离线缓存 v4
const CACHE_NAME = 'focus-jungle-v4';

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.png',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  console.log('SW: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('SW: Caching assets');
        return cache.addAll(ASSETS);
      })
      .then(() => {
        console.log('SW: All assets cached');
        return self.skipWaiting();
      })
      .catch(err => {
        console.error('SW: Cache failed', err);
      })
  );
});

self.addEventListener('activate', event => {
  console.log('SW: Activating...');
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('SW: Deleting old cache:', key);
            return caches.delete(key);
          })
      );
    }).then(() => {
      console.log('SW: Claiming clients');
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;
  
  if (request.method !== 'GET') {
    return;
  }

  if (request.url.includes('chrome-extension')) {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then(cached => {
        if (cached) {
          return cached;
        }

        return fetch(request)
          .then(response => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME).then(cache => {
              cache.put(request, responseToCache);
            });

            return response;
          })
          .catch(() => {
            if (request.mode === 'navigate') {
              return caches.match('./index.html');
            }
          });
      })
  );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
