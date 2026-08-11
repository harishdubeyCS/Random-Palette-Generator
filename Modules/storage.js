export function savePalette(colors) {
  localStorage.setItem('palette', JSON.stringify(colors));
}

export function getSavedPalette() {
  return JSON.parse(localStorage.getItem('palette')) || [];
}