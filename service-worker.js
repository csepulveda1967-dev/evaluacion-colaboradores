// Service Worker v2.0.0 - offline completo (sin dependencias externas)
const CACHE = 'eval-desempeno-v2.0.0';
const ASSETS = ['./', './index.html', './manifest.json', './icons/icon-192x192.png', './icons/icon-512x512.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE)
    .then(c => Promise.all(ASSETS.map(a => c.add(a).catch(() => {}))))
    .then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || !r.url.startsWith(self.location.origin)) return;
  if (r.mode === 'navigate') { // red primero: las actualizaciones llegan solas
    e.respondWith(fetch(r).then(res => {
      const cp = res.clone(); caches.open(CACHE).then(c => c.put('./index.html', cp)); return res;
    }).catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(r).then(hit => {
    const net = fetch(r).then(res => {
      if (res && res.status === 200) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)); }
      return res;
    }).catch(() => hit);
    return hit || net;
  }));
});
self.addEventListener('message', e => { if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting(); });
