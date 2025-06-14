const container = document.querySelector('.container');

function createGrid(size) {
  for (let i = 1; i <= size * size; i++) {
    const div = document.createElement('div');
    div.style.width = `${100/size}%`;
    div.addEventListener('mouseenter', assignRGBAValues);
    container.appendChild(div);
  }
}

createGrid(16);

function randomRGBValue() {
  return Math.floor(Math.random() * 256);
}

function getPreviousRBGAValues(e) {
  const rgba = e.target.style.backgroundColor;
  return rgba.slice(5, -1).split(', ').map(v => +v.trim());
}

function assignRGBAValues(e) {
  let [r, g, b, a] = [randomRGBValue(), randomRGBValue(), randomRGBValue(), 0.1];

  if (e.target.style.backgroundColor) {
    [r, g, b, a] = getPreviousRBGAValues(e);
    if (a < 1.0) {
      a += 0.1;
    }
  }

  e.target.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
}

const gridSizeBtn = document.querySelector('#btn-div button');

gridSizeBtn.addEventListener('click', () => {
  const size = +prompt('Choose your grid size (max 100):', '16');
  if (!size || size < 1 || size > 100) {
    alert('Size must be between 1 and 100!');
    return;
  }

  container.innerHTML = '';
  createGrid(size);
});