const container = document.querySelector('.container');

function createGrid(size) {
  for (let i = 1; i <= size * size; i++) {
    const div = document.createElement('div');
    div.style.width = `${100/size}%`;
    div.addEventListener('mouseenter', assignRGBValue);
    container.appendChild(div);
  }
}

createGrid(16);

function randomRGBValue() {
  return Math.floor(Math.random() * 256);
}

function getPreviousRBGValues(e) {
  const rgba = e.target.style.backgroundColor;
  return rgba.slice(5, -1).split(', ').map(v => +v.trim());
}

function assignRGBValue(e) {
  let r;
  let g;
  let b;
  let a;

  if (e.target.style.backgroundColor) {
    [r, g, b, a] = getPreviousRBGValues(e);
    if (a < 1.0) {
      a += 0.1;
    }
  } else {
    r = randomRGBValue();
    g = randomRGBValue();
    b = randomRGBValue();
    a = 0.1;
  }

  e.target.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
}

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