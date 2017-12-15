window.onload = function() {
    var element = $('div')
    console.log(element)
    reset(element)
}

function animate(element) {
    element.animate(
        {
            left: '1000px'
        },
        10000,
        function() { reset(this) }
    )
}

function reset(element) {
    element.left = 0
    animate(element)
}