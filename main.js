'use strict'

const select = document.querySelector('.js-select');
const button = document.querySelector('js-btn');
const player = document.querySelector('.js-player');
const pc = document.querySelector('.js-pc');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
};


function pcPlay(){
    const randomNumber = getRandomNumber(10);
    console.log(randomNumber);

    if(randomNumber < 3){
        console.log('Ordenador: Piedra')
    }else if (randomNumber >= 6){
        console.log('Ordenador: Papel')
    } else{
        console.log('Ordenador: Tijera')
    }

}

button.addEventListener('click', pcPlay)
