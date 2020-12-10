"use strict";

function playSound(ev) {
  const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${ev.keyCode}"]`);
  if (!audio) return; //stop the function from running all together
  audio.currentTime = 0; //rewind to the start
  audio.play();
  key.classList.add("playing");
}

window.addEventListener("keydown", playSound);

const keys = document.querySelectorAll(".key");

function removeTransition() {
  this.classList.remove("playing");
}

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
