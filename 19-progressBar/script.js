let number1 = document.getElementById("number");
let number2 = document.getElementById("number2");
let number3 = document.getElementById("number3");
let resetBtn = document.getElementById("reset");

function first() {
  let counter = 0;

  setInterval(() => {
    if (counter == 30) {
      clearInterval();
    } else {
      counter += 1;
      number1.innerHTML = counter + "%";
    }
  }, 62);
}
first();

function second() {
  let counter = 0;

  setInterval(() => {
    if (counter == 65) {
      clearInterval();
    } else {
      counter += 1;
      number2.innerHTML = counter + "%";
    }
  }, 30);
}
second();

function third() {
  let counter = 0;

  setInterval(() => {
    if (counter == 100) {
      clearInterval();
    } else {
      counter += 1;
      number3.innerHTML = counter + "%";
    }
  }, 18);
}
third();

resetBtn.onclick = () => {
    location.reload();
}