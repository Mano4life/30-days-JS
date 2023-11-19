// progress bar and song ======================================================================
let song = document.getElementById("song");
let songSource = document.getElementById("song-source");
let progress = document.getElementById("progress");
const currentTime = document.getElementById("current-time");
const duration = document.getElementById("duration");

// buttons ======================================================================
let playBtn = document.getElementById("playBtn");
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");
let volumeSlider = document.getElementById("volume");
let volumeBtn = document.getElementById("volume-button");
let volumeContainer = document.getElementById("vol-container");

// img and text (in progress) ======================================================================
let title = document.getElementById("title");
let singer = document.getElementById("singer");
let Img = document.getElementById("song-img");

// bar progress ======================================================================

song.addEventListener("timeupdate", function () {
  const durationMinutes = Math.floor(song.duration / 60);
  const durationSeconds = Math.floor(song.duration % 60);
  duration.innerHTML = `${durationMinutes}:${durationSeconds}`;

  const currentTimeMinutes = Math.floor(song.currentTime / 60);
  const currentTimeSeconds = Math.floor(song.currentTime % 60);
  currentTime.innerHTML = `${currentTimeMinutes}:${currentTimeSeconds}`;

  progress.value = (song.currentTime / song.duration) * 100;
});

progress.addEventListener("input", function () {
  playAudio();
  const seek = (progress.value / 100) * song.duration;
  song.currentTime = seek;
});

// play functions ======================================================================

function loadAudio(i) {
  song.src = songs[i];
  song.load();
  playAudio();
}

function playAudio() {
  song.play();
  playBtn.classList.remove("fa-play");
  playBtn.classList.add("fa-pause");
  Img.classList.add("playing");
}

function pauseAudio() {
  song.pause();
  playBtn.classList.remove("fa-pause");
  playBtn.classList.add("fa-play");
  Img.classList.remove("playing");
}

playBtn.addEventListener("click", function () {
  if (song.paused) {
    playAudio();
  } else {
    pauseAudio();
  }
});

// stopping function ======================================================================

song.addEventListener("ended", function () {
  song.currentTime = 0;
  pauseAudio();
});

// volume control ======================================================================

volumeBtn.addEventListener("mouseover", function () {
  if (volumeContainer.classList.contains("hide")) {
    volumeContainer.classList.remove("hide");
  }
});

volumeBtn.addEventListener("click", function () {
  if (!volumeBtn.classList.contains("fa-volume-xmark")) {
    song.volume = 0;
    volumeSlider.value = song.volume;
    volumeBtn.className = "fa-solid fa-volume-xmark";
  } else {
    song.volume = 0.5;
    volumeSlider.value = song.volume;
    volumeBtn.className = "fa-solid fa-volume-low";
  }
});

volumeContainer.addEventListener("mouseleave", function () {
  if (!volumeContainer.classList.contains("hide")) {
    volumeContainer.classList.add("hide");
  }
});

volumeSlider.addEventListener("input", function () {
  const volume = volumeSlider.value;
  song.volume = volume;
  if (volume == 0) {
    volumeBtn.className = "fa-solid fa-volume-xmark";
  } else if (volume < 0.4) {
    volumeBtn.className = "fa-solid fa-volume-off";
  } else if (volume < 0.8) {
    volumeBtn.className = "fa-solid fa-volume-low";
  } else {
    volumeBtn.className = "fa-solid fa-volume-high";
  }
});

// prev and next ======================================================================

// data arrays.

let titles = ["invincible", "The Best I Ever Had", "Baby Doll"];
let artists = ["Skillet", "Limi", "Ari Abdul"];
let images = ["media/cover.jpg", "media/Limi-cover.jpg", "media/Ari-cover.jpg"];
let songs = [
  "media/Skillet-FeelInvincible.m4a",
  "media/The-Best-I-Ever-Had.m4a",
  "media/Ari-BABYDOLL.m4a",
];

// functions

let index = 0;

nextBtn.addEventListener("click", function () {
  index++;
  index %= titles.length;

  title.innerHTML = titles[index];
  singer.innerHTML = artists[index];
  Img.src = images[index];
  loadAudio(index);
});

prevBtn.addEventListener("click", function () {
  index += titles.length - 1;
  index %= titles.length;

  title.innerHTML = titles[index];
  singer.innerHTML = artists[index];
  Img.src = images[index];
  loadAudio(index);
});
