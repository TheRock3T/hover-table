const board = document.querySelector('#board')
const SQUARES_NUMBER = 4512
const colors = ['#7FFFD4','#7FFF00','#DC143C','#9932CC','#FFFF00','#FF00FF','#FFFFF0']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element){
    const color = randomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#282828'
    element.style.boxShadow = '0 0 2px #000'
}

function randomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}