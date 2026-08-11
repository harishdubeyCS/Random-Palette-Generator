import { showMessage } from './toast.js';

export function createCard(randomColor) {
  const card = document.createElement('div');
  card.className = 'color-card';
  card.style.backgroundColor = randomColor;

  card.innerHTML = `
    <div class="color-content">
      <span class="color-code">${randomColor}</span>
      <i class="fa-regular fa-clipboard copy-icon"></i>
    </div>
  `;

  const copy = card.querySelector('.copy-icon');

  copy.addEventListener('click', () => {
    navigator.clipboard.writeText(randomColor);
    showMessage('Color copied!');
  });

  return card;
}