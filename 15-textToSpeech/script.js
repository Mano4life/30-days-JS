let txt = document.getElementById("txt");
let playBtn = document.getElementById("play-btn");
let select = document.getElementById("select");
let speech = new SpeechSynthesisUtterance();
let voices = [];

let x = 0;

// playing voice by clicking the play button (in process of adding pause option). 
playBtn.addEventListener("click", () => {
  speech.text = txt.value;
  window.speechSynthesis.speak(speech);
});

// capturing device voices and adding them to select.
window.speechSynthesis.onvoiceschanged = () => {
  // capturing voices on device.
  voices = window.speechSynthesis.getVoices();
  // default voice.
  speech.voice = voices[0];
  // adding them to select.
  voices.forEach((voice, i) => (select.options[i] = new Option(voice.name, i)));
};

// changing the voice based on user selection.
select.addEventListener("change", () => {
  speech.voice = voices[select.value];
});
