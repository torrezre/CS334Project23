const cacheName = 'flask-PWA';

const filesToCache = [
	'/static/fonts/EBGaramond-VariableFont_wght.ttf',
	'/static/fonts/JosefinSans-VariableFont_wght.ttf',
	'/static/style.css',
	'/static/management.css',
	'/static/images/creamery.png',
	'/static/images/menu-bar.png',
	'/static/images/menu-gallons.png',
	'/static/images/menu-mochi.png',
	'/static/images/menu-paletas.png',
	'/static/images/menu-sandwich.png',
	'/static/images/page-about-icecream.png',
	'/static/images/page-contact-icecream.png',
	'/static/images/product-bar-caramel nuts.png',
	'/static/images/product-bar-caramel plain.png',
	'/static/images/product-bar-chocolate nuts.png',
	'/static/images/product-bar-chocolate plain.png',
	'/static/images/product-gallon-chocolate.png',
	'/static/images/product-gallon-cookies.png',
	'/static/images/product-gallon-mango.png',
	'/static/images/product-gallon-mint.png',
	'/static/images/product-gallon-pecan.png',
	'/static/images/product-gallon-rockyroad.png',
	'/static/images/product-gallon-vanilla.png',
	'/static/images/product-mochi-chocolate.png',
	'/static/images/product-mochi-dulce.png',
	'/static/images/product-mochi-greentea.png',
	'/static/images/product-mochi-mango.png',
	'/static/images/product-mochi-strawberry.png',
	'/static/images/product-mochi-vanilla.png',
	'/static/images/product-mochi-variety.png',
	'/static/images/product-paleta-lime.png',
	'/static/images/product-paleta-mango.png',
	'/static/images/product-paleta-pineapple.png',
	'/static/images/product-paleta-strawberry.png',
	'/static/images/product-sandwich-chocolate.png',
	'/static/images/product-sandwich-dblchocolate.png',
	'/static/images/product-sandwich-vanilla.png'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});