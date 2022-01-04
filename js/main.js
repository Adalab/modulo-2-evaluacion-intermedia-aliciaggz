'use strict';

const select = document.querySelector('.js-select');
const button = document.querySelector('.js-btn');
const player = document.querySelector('.js-player');
const pc = document.querySelector('.js-pc');
const response = document.querySelector('.js-response');
const button2 = document.querySelector('.js-btn2');
const totalCounter = document.querySelector('.js-counter');

//funcion para obtener el numero aleatorio

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//funcion que tiene la jugada del ordernador

function pcPlay() {
  const randomNumber = getRandomNumber(10);
  if (randomNumber <= 3) {
    console.log('Ordenador: Piedra');
  } else if (randomNumber <= 6) {
    console.log('Ordenador: Papel');
  } else if (randomNumber <= 10) {
    console.log('Ordenador: Tijera');
  }
}

//Eleccion del jugador

function playerPlay() {
  const userOption = select.value;

  if (userOption === 'piedra') {
    console.log('Player: Piedra');
  } else if (userOption === 'papel') {
    console.log('Player: Papel');
  } else {
    console.log('Player: Tijera');
  }
}

//contadores

let tries = 0;

function counterPlayer() {
  tries += 1;
  player.innerHTML = ` Jugador: ${tries} `;
}

let triesPc = 0;

function counterPc() {
  triesPc += 1;
  pc.innerHTML = ` Computadora: ${triesPc} `;
}

let totalTries = 0;

function totalCounterPlay() {
  totalTries += 1;
  totalCounter.innerHTML = `Numero de jugadas: ${totalTries}`;
}

function paintResponse(message) {
  response.innerHTML = message;
}

function game() {
  const randomNumber = getRandomNumber(10);

  console.log(randomNumber);

  pcPlay(randomNumber);

  const userOption = select.value;
  //pcOption === 'piedra'
  if (userOption === 'piedra' && randomNumber <= 3) {
    paintResponse('Empate.');
  } else if (userOption === 'papel' && randomNumber <= 3) {
    paintResponse('¡Has Ganado!');
    counterPlayer();
    totalCounterPlay();
  } else if (userOption === 'tijera' && randomNumber <= 3) {
    paintResponse('¡Has Perdido!');
    counterPc();
    totalCounterPlay();
  } else if (userOption === 'piedra' && randomNumber <= 6) {
    paintResponse('¡Has Perdido!');
    counterPc();
    totalCounterPlay();
  } else if (userOption === 'papel' && randomNumber <= 6) {
    paintResponse('Empate.');
    totalCounterPlay();
  } else if (userOption === 'tijera' && randomNumber <= 6) {
    paintResponse('¡Has Ganado!');
    counterPlayer();
    totalCounterPlay();
  } else if (userOption === 'piedra' && randomNumber <= 10) {
    paintResponse('¡Has Ganado!');
    counterPlayer();
    totalCounterPlay();
  } else if (userOption === 'papel' && randomNumber <= 10) {
    paintResponse('¡Has Perdido!');
    counterPc();
    totalCounterPlay();
  } else if (userOption === 'tijera' && randomNumber <= 10) {
    paintResponse('Empate.');
    totalCounterPlay();
  } else {
    paintResponse('Selecciona una jugada.');
  }
}

//funcion BONUS del boton

function resetCounters() {
  if (totalTries >= 10) {
    button2.classList.remove('hidden');
    if (triesPc > tries) {
      paintResponse('¡Has Perdido!');
    } else if (triesPc < tries) {
      paintResponse('¡Has Ganado!');
    } else {
      paintResponse('Empate.');
    }
  }
}

function buttonRestart() {
  button2.classList.add('hidden');
  pc.innerHTML = ` Computadora: ${(triesPc = 0)} `;
  player.innerHTML = ` Jugador: ${(tries = 0)}`;
  totalCounter.innerHTML = `Numero de jugadas: ${(totalTries = 0)}`;
  response.innerHTML = 'Vamos a jugar!';
}

button2.addEventListener('click', buttonRestart);

//funcion recogedora

function handleClickUpdate(event) {
  event.preventDefault();
  pcPlay();
  getRandomNumber();
  playerPlay();
  game();
  resetCounters();
}

button.addEventListener('click', handleClickUpdate);
