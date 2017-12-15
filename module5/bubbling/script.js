window.onload = function() {
    document.getElementsByTagName('div')[0].addEventListener('click', divClick)
    document.getElementsByTagName('button')[0].addEventListener('click', buttonClick)
}

function divClick() {
    console.log('divClick')
}

function buttonClick(e) {
    console.log('buttonClick')
    e.stopPropagation()
}