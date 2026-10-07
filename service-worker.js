// Service Worker para Evaluación de Garzones PWA
// Versión 1.0.0 - Soporte offline completo

const CACHE_NAME = 'evaluacion-garzones-v1.0.0';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  console.log('[SW] Instalando Service Worker...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Cacheando archivos de la aplicación');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Activación del Service Worker
self.addEventListener('activate', (event) => {
  console.log('[SW] Activando Service Worker...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Eliminando cache antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Estrategia de caché: Cache First, luego Network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Si está en caché, devolver desde caché
        if (response) {
          console.log('[SW] Sirviendo desde caché:', event.request.url);
          return response;
        }

        // Si no está en caché, intentar obtener de la red
        return fetch(event.request)
          .then((response) => {
            // Verificar si la respuesta es válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clonar la respuesta para guardarla en caché
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // Si falla la red, intentar servir desde caché de respaldo
            console.log('[SW] Sin conexión, usando versión offline');
            return caches.match('./index.html');
          });
      })
  );
});

// Sincronización en segundo plano (para futuras mejoras)
self.addEventListener('sync', (event) => {
  console.log('[SW] Sincronización en segundo plano:', event.tag);
  if (event.tag === 'sync-evaluations') {
    event.waitUntil(syncEvaluations());
  }
});

async function syncEvaluations() {
  // Placeholder para sincronización de evaluaciones
  // Se puede implementar sincronización con servidor en el futuro
  console.log('[SW] Sincronizando evaluaciones...');
}

// Manejo de mensajes desde la aplicación
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => cache.addAll(event.data.payload))
    );
  }
});
