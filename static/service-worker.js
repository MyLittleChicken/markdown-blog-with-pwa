self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open('app-cache').then((cache) => {
			return cache.addAll([
				'/',
				'/post',
				'/post/**',
				'/manifest.json',
				'/favicon.png',
			]);
		})
	);
});
