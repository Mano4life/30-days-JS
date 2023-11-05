let ToastBox = document.getElementById("toast-container");
let Msg = [
  '<i class="fa-solid fa-circle-check"></i> successfully submitted',
  '<i class="fa-solid fa-circle-xmark"></i> please fix the error!',
  '<i class="fa-solid fa-circle-exclamation"></i> invalid input, check again',
];

function AddToast(Msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = Msg;
  ToastBox.appendChild(toast);
  
  if(Msg.includes("error")){
    toast.classList.add("error");
  }
  if(Msg.includes("invalid")){
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  },
  6000)
}
