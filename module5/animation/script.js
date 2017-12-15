var id

window.onload = function() {
    var element = document.querySelector('div')
    element.style.left = '0px'
    element.style.top = '0px'
    element.addEventListener('click', clicked)
    id = requestAnimationFrame(animator)
}

function clicked() {
    if (id) {
        cancelAnimationFrame(id)
        id = 0
    } else {
        id = requestAnimationFrame(animator)
    }
}

function animator() {
    var element = document.querySelector('div')
    var horizontal = parseInt(element.dataset.horizontal)
    var vertical = parseInt(element.dataset.vertical)
    var left = parseInt(element.style.left)
    var top = parseInt(element.style.top)
    console.log(window.innerWidth)
    console.log(element.width)
    if (left > 800) {
        element.dataset.horizontal = '-1'
    }
    if (left < 1) {
        element.dataset.horizontal = '1'
    }
    if (top > 400) {
        element.dataset.vertical = '-1'
    }
    if (top < 1) {
        element.dataset.vertical = '1'
    }
    newLeft = left + horizontal
    newLeft += 'px'
    element.style.left = newLeft
    newTop = top + vertical
    newTop += 'px'
    element.style.top = newTop
    id = requestAnimationFrame(animator)
}