const select = document.querySelector('#select')
let current = document.querySelector('#input')
const element = document.querySelector('#div')
const btn = document.querySelector('#btn')

select.addEventListener('input', function () {

    element.className = this.value
    // element.style.backgroundColor = '#ffffff'
       current.value = '#000000'

});

function changeColor() {

    element.style.backgroundColor = current.value
}
btn.addEventListener('click', changeColor)



