const sizer = document.querySelector("#sizer");
const start = document.querySelector("#start");
const timer = document.querySelector("#timer");
const answer = document.querySelector("#answer");
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
  const userAnswer = answer.value;
  if (`${userAnswer}px` === sizer.style.width) {
    handleGameOver();
  }
}

function handleGameOver() {
  start.classList.add('start--ready');
  start.removeAttribute('disabled');
  answer.setAttribute('disabled', 'true');
  createLine();
  clearInterval(startTimer);
}

createLine();
start.addEventListener("click", handleStart);
answer.addEventListener("input", handleAnswers);
