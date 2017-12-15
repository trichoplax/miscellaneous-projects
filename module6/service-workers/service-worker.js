var log = console.log.bind(console)
var version = '0.0.2'
var cacheName = 'sw-demo'
var cache = cacheName + '_' + version
var filesToCache = [
    'https://media.giphy.com/media/11NB2i89Dqf5e0/giphy.gif'
]

self.addEventListener("install", function(event) {
    log('[ServiceWorker] Installing...')

    event.waitUntil(caches
        .open(cache)
        .then(function(cache) {
            log('[ServiceWorker] Caching files')
            cache.addAll(filesToCache)
        })
    )
})

self.addEventListener("fetch", function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                if(response) {
                    log('Fulfilling ' + event.request.url + ' from cache.')
                    return response
                } else {
                    log(event.request.url + " not found in cache fetching from network.")
                    return fetch(event.request)
                }
            })
    )
})