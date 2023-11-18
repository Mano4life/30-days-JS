let [seconds, minutes, hours] = [0, 0, 0];
let time = document.getElementById("time");
let timer = null;
let flagParent = document.getElementById("flagged-time-container");

function Watch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  time.innerHTML = h + ":" + m + ":" + s;
}

function startWatch() {
  if (timer !== null) {
    clearInterval(timer);
  }
  Watch();
  timer = setInterval(Watch, 1000);
}

function pauseWatch() {
  clearInterval(timer);
}

function stopWatch() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  time.innerHTML = "00:00:00";
}

function flag() {
  let h3 = document.createElement("h3");
  h3.setAttribute("id", "flagged-time");
  let i = document.createElement("i");
  i.setAttribute("class", "fa-solid fa-flag");
  h3.innerHTML = time.innerHTML;
  flagParent.appendChild(h3);
  h3.appendChild(i);
}
