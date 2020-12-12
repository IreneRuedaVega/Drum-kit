"use strict";

const keys = document.querySelectorAll(".key");
const buttons = document.querySelectorAll(".key");

function playSound(ev) {
  const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${ev.keyCode}"]`);
  if (!audio) return; //stop the function from running all together
  audio.currentTime = 0; //rewind to the start
  audio.play();
  key.classList.add("playing");
}

window.addEventListener("keydown", playSound);

function removeTransition() {
  this.classList.remove("playing");
}

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

function handleClick(ev) {
  if (ev.target.classList.contains("key")) {
    let soundToPlay = ev.target.dataset.sound;
    const audio = document.querySelector(
      `audio[data-sound="${ev.target.dataset.sound}"]`
    );
    const key = document.querySelector(
      `.key[data-sound="${ev.target.dataset.sound}"]`
    );
    audio.currentTime = 0;
    audio.play(soundToPlay);
    key.classList.add("playing");
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleClick);
}
