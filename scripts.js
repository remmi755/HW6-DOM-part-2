let square = document.getElementById('div1')
let rectangle = document.getElementById('div2')
let circle = document.getElementById('div3')
let current = document.getElementById('input').value

document.getElementById('select').addEventListener('change', function () {

    let style = this.value === "square" ? 'block' : 'none';
    square.style.display = style;
    square.style.backgroundColor = '#ffffff'
    document.getElementById('input').value = '#000000'

     style = this.value === "rectangle" ? 'block' : 'none';
    rectangle.style.display = style;
    rectangle.style.backgroundColor = '#ffffff'


     style = this.value === "circle" ? 'block' : 'none';
    circle.style.backgroundColor = '#ffffff'
    circle.style.display = style;

});

function changeColor() {

    let current = document.getElementById('input').value

       if (current !== '#000000') {

        square.style.backgroundColor = current
        rectangle.style.backgroundColor = current
        circle.style.backgroundColor = current

    } else {
           square.style.backgroundColor = '#000000'
           rectangle.style.backgroundColor = '#000000'
           circle.style.backgroundColor = '#000000'
       }


}

document.addEventListener("click",function(e){
    if(e.target.id === 'btn'){
        changeColor()
    }
});





