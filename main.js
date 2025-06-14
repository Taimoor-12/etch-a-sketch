const container = document.querySelector('.container');

function createGrid(size) {
  for (let i = 1; i <= size * size; i++) {
    const div = document.createElement('div');
    div.style.width = `${100/size}%`;
    div.addEventListener('mouseenter', () => div.style.backgroundColor = 'red');
    container.appendChild(div);
  }
}

createGrid(16);