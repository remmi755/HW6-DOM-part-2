const select = document.querySelector('#select')
let current = document.querySelector('#input')
const element = document.querySelector('#div')
const btn = document.querySelector('#btn')
let defaultInput = '#000000'
let defaultFigure = '#ffffff'

select.addEventListener('input', function () {
    element.className = this.value
    element.style.backgroundColor = defaultFigure
    current.value = defaultInput
});

function changeColor() {

    element.style.backgroundColor = current.value

}
btn.addEventListener('click', changeColor)



