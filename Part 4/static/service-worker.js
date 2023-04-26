// Install the service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('creamcache').then(cache => {
      //cache static files
      return Promise.all([
        cache.add('/'),
        cache.add('{{ url_for('static', filename='fonts/EBGaramond-VariableFont_wght.ttf') }}'),
        cache.add('{{ url_for('static', filename='fonts/JosefinSans-VariableFont_wght.ttf') }}'),
        cache.add('{{ url_for('static', filename='images/creamery.png') }}'),
        cache.add('{{ url_for('static', filename='images/menu-paletas') }}'),
        cache.add('{{ url_for('static', filename='images/menu-bar') }}'),
        cache.add('{{ url_for('static', filename='images/menu-gallons') }}'),
        cache.add('{{ url_for('static', filename='images/menu-mochi') }}'),
        cache.add('{{ url_for('static', filename='images/menu-sandwich') }}'),
        cache.add('{{ url_for('static', filename='style.css') }}'),
        cache.add('{{ url_for('static', filename='creamery.js') }}')
      ]);
    })
  );
});
