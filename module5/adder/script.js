window.onload = function() {
    console.log(add(1,2))
    var myArray = ['the', 'cat', 'sat', 'on', 'the', 'mat']
    unroll(myArray)
    var nextArray = [1,2,3]
    unroll(nextArray)
    setTextById('paragraph_1', 'A paragraph with words in it.')
    //setTextByClass('inner', 'Inner div.')
    setNameByName('submit_button', 'New text.')
}

function add(number1, number2) {
    return number1 + number2
}

function unroll(anArray) {
    anArray.forEach(function(item) {
        console.log(item)
    })
}

function setTextById(id, text) {
    var element = document.getElementById(id)
    element.textContent = text
}

function setTextByClass(theClass, text) {
    var elements = document.getElementsByClassName(theClass)
    elements[0].textContent += text
}

function setNameByName(name, text) {
    var elements = document.getElementsByName(name)
    elements[0].textContent = text
}

function setTextByTag(tag, text) {
    var elements = document.getElementsByTagName(tag)
    elements[0] = text
}

function setTextByQuery(query, text) {
    var element = document.querySelector(query)
    element.textContent = text
}

function setTextByQueryAll(query, text) {
    var elements = document.querySelectorAll(query)
    elements[0] = text
}