// progress bar and song
let song = document.getElementById("song");
let songSource = document.getElementById("song-source");
let progress = document.getElementById("progress");

// buttons
let playBtn = document.getElementById("playBtn");
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");
let volumeSlider = document.getElementById("volume");

// img and text (in progress)
let Img = document.getElementById("song-img");
let title = document.getElementById("title");
let singer = document.getElementById("singer");

// getting data
song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
    song.volume = volumeSlider.value;
}

// play function

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

// bar progress
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

// stopping function
song.addEventListener("ended", function (){
    song.pause();
    song.currentTime = 0;
    playBtn.classList.remove("fa-pause");
    playBtn.classList.add("fa-play");
    Img.classList.remove("playing");
})

// volume control
function setVolume() {
    song.volume = volumeSlider.value;
}

// prev and next (in progress cuz my brain is fried!)
