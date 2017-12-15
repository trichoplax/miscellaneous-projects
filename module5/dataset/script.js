window.onload = function() {
    outputData()
}

function outputData() {
    element = document.getElementById('here')
    data = element.dataset
    console.log(data)
    keys = Object.keys(data)
    console.log(keys)
    text = ''
    keys.forEach(function(key) {
        text += key + ': ' + data[key] + '<br>'
    })
    element.innerHTML = text
}