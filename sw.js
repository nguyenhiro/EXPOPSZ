const CACHE_NAME = 'shipperz-v1';
const ASSETS = [
  './',
  './shipperz.html',
  './manifest.json',
  './body.jpg',
  './viahe1.jpg',
  './nhanvat.png',
  './chuquan.png',
  './cogiao.png',
  './bodoi.png',
  './bacsi.png',
  './thungrac.png',
  './ongnuoc.png',
  './khucgo.jpg',
  './hopbian.png',
  './cuncute.png',
  './phancute.png',
  './bongbong.png',
  './nhac.mp3',
  './jump.mp3',
  './coin.mp3'
];

// Cài đặt Service Worker và Cache tài nguyên
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching all assets');
      return cache.addAll(ASSETS);
    })
  );
});

// Lấy dữ liệu từ Cache khi Offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

// Xóa Cache cũ khi update
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }));
    })
  );
});