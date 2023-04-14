const drawContainer = document.querySelector('.draw-container');

let boxWidth = 55;
let boxHeight = 55;

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