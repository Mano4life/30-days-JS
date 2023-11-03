let imgBox = document.getElementById("img-box");
let QrText = document.getElementById("input-text");
let QrImg = document.getElementById("qr-image");

function generate() {
    if(QrText.value) {
        QrImg.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
        QrText.value;
        imgBox.classList.add("show");
    }
    else{
        QrText.classList.add("error");
        setTimeout(() => {
            QrText.classList.remove("error");
        }, 1000);
    }
}
