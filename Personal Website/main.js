const toggleButton = document.getElementById('toggleButton');
const targetElement = document.querySelector('html');
let isFilterEnabled = false;

toggleButton.addEventListener('click', () => {
  if (isFilterEnabled) {
    targetElement.style.filter = 'invert(0)';
  } else {
    targetElement.style.filter = 'invert(1)';
  }
  isFilterEnabled = !isFilterEnabled;
});