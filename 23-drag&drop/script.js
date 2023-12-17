let lists = document.getElementsByClassName("list");
let leftBox = document.getElementById("left");
let rightBox = document.getElementById("right");

// function to handle dragover defaults.
function handleDragOver(e) {
  e.preventDefault();
}

for (list of lists) {
  list.addEventListener("dragstart", function (e) {
    let selected = e.target;
    // to clean eventListeners to avoid unnecessary binding.
    function cleanupEventListeners() {
      rightBox.removeEventListener("dragover", handleDragOver);
      leftBox.removeEventListener("dragover", handleDragOver);
    }
    // right box.
    rightBox.addEventListener("dragover", handleDragOver);
    rightBox.addEventListener("drop", function (e) {
      rightBox.appendChild(selected);
      selected = null;
      cleanupEventListeners();
    });
    // left box.
    leftBox.addEventListener("dragover", handleDragOver);
    leftBox.addEventListener("drop", function (e) {
      leftBox.appendChild(selected);
      selected = null;
      cleanupEventListeners();
    });
  });
}
