const container = document.querySelector('.container');

function createGrid(size) {
  for (let i = 1; i <= size * size; i++) {
    const div = document.createElement('div');
    const width = 100/size;
    div.style.width = `${width}%`;
    container.appendChild(div);
  }
}

createGrid(16);