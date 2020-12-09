"use strict";

const keys = document.querySelectorAll(".key");

function playSound(ev) {
  const key = document.querySelector(`.key[data-key="${ev.keyCode}"]`);

  key.classList.add("playing");

  const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);

  audio.currentTime = 0; //el sonido vuelve al segundo 0 y puedo volver a dar a la tecla y hacer que suene sin tener que esperar a que el sonido anterior termine

  audio.play();
}

window.addEventListener("keydown", playSound);

function removeTransition() {
  this.classList.remove("playing");
}

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
//cuando la transición del css sea completada, quitar la clase "playing"
