let pass = document.getElementById("input");
let msg = document.getElementById("msg");
let str = document.getElementById("str");
let btn = document.getElementById("btn");
let show = document.getElementById("eye-btn");

function color(color) {
  pass.style.borderColor = color;
  msg.style.color = color;
}

function resetColor() {
  pass.style.borderColor = "";
  msg.style.color = "";
}

const weakPass = () => {
  let password = pass.value;
  return password.length < 4 && /[a-z]/.test(password);
};
const mediumPass = () => {
  let password = pass.value;
  return (
    // password.length >= 4 &&
    password.length < 8 && /[a-z]/.test(password) && /\d/.test(password)
  );
};
const strongPass = () => {
  let password = pass.value;
  return (
    password.length >= 8 &&
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /\d/.test(password)
  );
};

pass.addEventListener("input", () => {
  if (pass.value.length > 0) {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
    resetColor();
  }
  // checking strength .
  if (pass.value.length === 0) {
    resetColor();
  } else if (weakPass()) {
    str.innerHTML = "weak";
    color("#ff5925");
  } else if (mediumPass()) {
    str.innerHTML = "medium";
    color("yellow");
  } else if (strongPass()) {
    str.innerHTML = "strong";
    color("#26d730");
  }
});

btn.addEventListener("click", () => {
  pass.value = "";
  msg.style.display = "none";
  resetColor();
});

show.addEventListener("click", () => {
  let eye = document.getElementById("eye");
  if (pass.type == "password") {
    pass.type = "text";
    eye.setAttribute("class", "fa-solid fa-eye");
  } else {
    pass.type = "password";
    eye.setAttribute("class", "fa-solid fa-eye-slash");
  }
});