let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
  let currentT = new Date();

  hrs.innerHTML = (currentT.getHours() < 10 ? "0" : "") + currentT.getHours();
  min.innerHTML =
    (currentT.getMinutes() < 10 ? "0" : "") + currentT.getMinutes();
  sec.innerHTML =
    (currentT.getSeconds() < 10 ? "0" : "") + currentT.getSeconds();
}, 1000);
