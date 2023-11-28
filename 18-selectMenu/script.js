let field = document.getElementById("selectField");
let arrow = document.getElementById("arrow");
let txt = document.getElementById("text");
let list = document.getElementById("list");
let options = document.getElementsByClassName("options");

function toggle() {
  list.classList.toggle("hide");
  arrow.classList.toggle("rotate");
}

field.onclick = function () {
  toggle();
};

for (option of options) {
  option.onclick = function () {
    txt.innerHTML = this.textContent;
    toggle();
  };
}
