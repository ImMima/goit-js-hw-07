function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');
const handleSubmit = event => {
  const color = getRandomHexColor();
  span.textContent = color;
  document.body.style.backgroundColor = color;
};
btn.addEventListener('click', handleSubmit);
