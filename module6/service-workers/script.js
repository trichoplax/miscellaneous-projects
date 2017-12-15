if('serviceWorker' in navigator) {
    console.log('Service worker support exists.')
    navigator.serviceWorker
        .register('service-worker.js', {scope: ' '})
        .then(function() {
            console.log('Service worker registered.')
        })
        .catch(function (err) {
            console.log(`What?? An error?!? ${err}`)
        })
} else {
    console.log('No service workers for you.')
}

fetch('.').then(function(data) {
    console.log(data)
})