const colorInput = document.getElementById('color-input');
const colorCode = document.getElementById('color-code');


colorInput.addEventListener('input', () => {
  colorCode.textContent = colorInput.value;
});
