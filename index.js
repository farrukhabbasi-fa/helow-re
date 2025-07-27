let count = 0;

const displayEl = document.querySelector('#count-display');
const incBtn = document.getElementById('increment-btn');
const decBtn = document.getElementById('decrement-btn');

const updateDisplay = () => {
  displayEl.textContent = `Updated Count: ${count}`;
};

const updateButtons = () => {
  if (count <= 0) {
    decBtn.disabled = true;
    decBtn.style.opacity = '0.5';
    decBtn.style.cursor = 'not-allowed';
  } else {
    decBtn.disabled = false;
    decBtn.style.opacity = '1';
    decBtn.style.cursor = 'pointer';
  }
};

const handleClick = () => {
  // increment بٹن ہمیشہ کام کرے
  count = count === 0 ? 1 : count * 2;
  updateDisplay();
  updateButtons();
};

const handleDecrement = () => {
  // صرف جب count > 0 ہو تب decrement ہو
  if (count > 0) {
    count = count / 2;
    updateDisplay();
    updateButtons();
  }
};

const initializeApp = () => {
  incBtn.addEventListener('click', handleClick);
  decBtn.addEventListener('click', handleDecrement);
};

// Initialize
initializeApp();
updateDisplay();
updateButtons();
