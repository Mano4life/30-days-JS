const createBtn = document.querySelector(".btn");
const notesContainer = document.querySelector(".notes-container");
let notes = document.querySelectorAll(".input-box");

// click to make an input field
function clicker(){
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = 'images/delete.png';
    notesContainer.appendChild(inputBox).appendChild(img);
}

// click to remove input field.......................
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        updateStorage();
    }else if(e.target.tagName === 'P'){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(note => {
            note.onkeyup = function (){
                updateStorage();
            }
        })
    }
})

// function to store data to local storage..................
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

//function to call the local storage if there's any...............
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

// function to make a default empty note if there isn't any .........
function defaultNote(){
    if(localStorage.getItem("notes") === ''){
        clicker();
    }
}
// UN-COMMENT THE BELLOW FUNCTION IF YOU WANT IT SHOW A DEFAULT NOTE :) .......................
// defaultNote();

//function to make enter default-ish.....................
document.addEventListener("keydown", event => {
    if(event.key === 'Enter'){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})