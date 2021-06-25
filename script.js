//Choose a random color
const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['#ADFF2F', '#008080', '#FFDEAD', '#FFB6C1', '#9400D3', '#708090']

body.style.backgroundColor = '#008080'
button.addEventListener('click', changeBackground)

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
}