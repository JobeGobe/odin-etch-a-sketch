const drawContainer = document.querySelector('.draw-container');
const clearButton = document.querySelector('#clear-button');

let boxWidth = 24;
let boxHeight = 24;

for(let i = 0; i < (boxWidth * boxHeight); i++){
    const drawBox = document.createElement('div');
    drawBox.style.width = 960/boxWidth + 'px';
    drawBox.classList.add('draw-pixel');
    drawContainer.appendChild(drawBox);
}

console.log(drawContainer.style.width)

drawContainer.addEventListener('mouseover', (e)=> {
    if(e.target.className === 'draw-pixel'){
        e.target.classList.add('drawn');
    }
})

clearButton.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.draw-pixel');
    console.log(pixels)
    Array.from(pixels).forEach(element => {
        element.classList.remove('drawn');
        console.log(element)
    });
})