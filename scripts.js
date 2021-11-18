const select = document.querySelector('#select')
let current = document.querySelector('#input')
const element = document.querySelector('div')
const btn = document.querySelector('#btn')

select.addEventListener('change', function () {
    element.style.backgroundColor = '#ffffff'
       current.value = '#000000'

    if (this.value === 'square'){
        element.className = 'div1'

    } else if (this.value === 'rectangle'){
        element.className = 'div2'

    } else if (this.value === 'circle') {
       element.className = 'div3'
    }
});

function changeColor() {

    if (current.value !== '#000000') {

    element.style.backgroundColor = current.value

} else {
        element.style.backgroundColor = '#000000'
    }
}
btn.addEventListener('click', changeColor)



