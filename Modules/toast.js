export function showMessage(message) {
  const toast = document.createElement('div');
  toast.setAttribute('class', 'toast');

  toast.innerHTML = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  setTimeout(() => {
    toast.remove();
  }, 2000);
}