import { getRandomColor } from '../Modules/colors.js';
import { createCard } from '../Modules/ui.js';
import { savePalette } from '../Modules/storage.js';
import { showMessage } from '../Modules/toast.js';

const generateBtn = document.querySelector('#generateBtn');
const saveBtn = document.querySelector('#saveBtn');
const palette = document.querySelector('.colorPalette');

function generatePalette() {
  palette.innerHTML = '';

  for (let i = 0; i < 5; i++) {
    const randomColor = getRandomColor();
    const card = createCard(randomColor);
    palette.append(card);
  }
}

saveBtn.addEventListener('click', () => {
  const colors = [];

  document.querySelectorAll('.color-code').forEach((ele) => {
    colors.push(ele.innerText);
  });

  savePalette(colors);
  showMessage('Palette saved!');
});

generateBtn.addEventListener('click', generatePalette);

generatePalette();