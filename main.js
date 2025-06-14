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

const gridSizeBtn = document.querySelector('#btn-div button');

gridSizeBtn.addEventListener('click', () => {
  const size = +prompt('Choose your grid size (max 100):', '16');
  if (size > 100) {
    alert('Size must be between 1 and 100!');
    return;
  }

  container.innerHTML = '';
  createGrid(size);
});