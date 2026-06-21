const counterValue = document.querySelector('#counter-value');
const incrementButton = document.querySelector('#increment-button');
const decrementButton = document.querySelector('#decrement-button');

let count = 0;

function updateCounter() {
  counterValue.textContent = count;
}

incrementButton.addEventListener('click', () => {
  count += 1;
  updateCounter();
});

decrementButton.addEventListener('click', () => {
  count -= 1;
  updateCounter();
});
