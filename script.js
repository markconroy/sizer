const sizer = document.querySelector("#sizer");
const start = document.querySelector("#start");
const timer = document.querySelector("#timer");
const answer = document.querySelector("#answer");
const closeHigher = document.querySelector('.controls__label--higher')
const closeLower = document.querySelector('.controls__label--lower')
let maxWidthOfLine;
let time = 0;
let startTimer;

function randomNumber(number) {
  return Math.floor(Math.random() * (number + 1));
}

function createLine() {
  maxWidthOfLine = document.querySelector("main").offsetWidth;
  const actualWidthOfLine = randomNumber(maxWidthOfLine);
  sizer.style.width = `${actualWidthOfLine}px`;
}

function handleStart() {
  time = 0;
  timer.innerText = time;
  start.setAttribute("disabled", true);
  start.classList.remove("start--ready");
  answer.removeAttribute('disabled');
  startTimer = setInterval(() => {
    time = time + 1;
    timer.innerText = time;
  }, 1000);
}

function handleAnswers() {
  const userAnswer = parseInt(answer.value);
  const sizerSize = parseInt(sizer.style.width.replace('px', ''));
  if (userAnswer < sizerSize) {
    closeHigher.classList.remove('controls__label--disable');
    closeLower.classList.add('controls__label--disable');
  } else if (userAnswer > sizerSize) {
    closeHigher.classList.add('controls__label--disable');
    closeLower.classList.remove('controls__label--disable');
  } else if (userAnswer === sizerSize) {
    handleGameOver();
  }
}

function handleGameOver() {
  start.classList.add('start--ready');
  start.removeAttribute('disabled');
  answer.setAttribute('disabled', 'true');
  closeHigher.classList.remove('controls__label--disable');
  closeLower.classList.remove('controls__label--disable');
  createLine();
  clearInterval(startTimer);
}

createLine();
start.addEventListener("click", handleStart);
answer.addEventListener("input", handleAnswers);
