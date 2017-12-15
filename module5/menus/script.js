document.addEventListener('DOMContentLoaded', whenLoaded)
console.log('hi')

function whenLoaded() {
    console.log('here')
    elements = document.querySelectorAll('.radio_switch')
    console.log(elements)
    elements.forEach(function(element) {
        element.classList.add('off')
        element.addEventListener('click', function() {
            if (this.classList.contains('on')) {
                this.classList.add('off')
                this.classList.remove('on')
            } else {
                this.classList.add('on')
                this.classList.remove('off')
            }
        })
    })
}