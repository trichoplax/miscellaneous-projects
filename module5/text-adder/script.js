window.onload = function() {
    document.getElementsByTagName('button')[0].addEventListener('click', addText)
    document.getElementsByTagName('div')[0].addEventListener('mouseover', mouseOn)
    document.getElementsByTagName('div')[0].addEventListener('mouseout', mouseOff)
}

function addText() {
    text = document.getElementsByTagName('div')[0].textContent
    document.getElementsByTagName('div')[0].textContent += text?text:'More text... '
}

function mouseOn() {
    text = document.getElementsByTagName('div')[0].textContent
    document.getElementsByTagName('div')[0].textContent = text.toUpperCase()
}

function mouseOff() {
    text = document.getElementsByTagName('div')[0].textContent
    document.getElementsByTagName('div')[0].textContent = text.toLowerCase()
}