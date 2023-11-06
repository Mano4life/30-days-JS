let progress = document.getElementById("progress");
let song = document.getElementById("song");
let playBtn = document.getElementById("playBtn");
let volumeSlider = document.getElementById("volume");
let Img = document.getElementById("song-img");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
    song.volume = volumeSlider.value;
}

playBtn.addEventListener("click", () => {
    if(playBtn.classList.contains("fa-pause")){
        song.pause();
        playBtn.classList.remove("fa-pause");
        playBtn.classList.add("fa-play");
        Img.classList.remove("playing");

    }else{
        song.play();
        playBtn.classList.remove("fa-play");
        playBtn.classList.add("fa-pause");
        Img.classList.add("playing");
    }
})

if(song.play()) {
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
    Img.classList.add("playing");
}

song.addEventListener("ended", function (){
    song.pause();
    song.currentTime = 0;
    playBtn.classList.remove("fa-pause");
    playBtn.classList.add("fa-play");
    Img.classList.remove("playing");
})

function setVolume() {
    song.volume = volumeSlider.value;
}