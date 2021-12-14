'use strict'

const select = document.querySelector('.js-select');
const button = document.querySelector('.js-btn');
const player = document.querySelector('.js-player');
const pc = document.querySelector('.js-pc');
const response = document.querySelector('.js-response');




function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
};

const randomNumber = getRandomNumber(10);

function pcPlay(){

    console.log(randomNumber);

    if(randomNumber <= 3){
        console.log('Ordenador: Piedra')
    }else if (randomNumber <= 6){
        console.log('Ordenador: Papel')
    } else if (randomNumber <= 10){
        console.log('Ordenador: Tijera')
    }

}

pcPlay();


//Eleccion del jugador

function playerPlay(){
    
    const userOption = select.value;
    
    if(userOption === 'piedra'){
        
        console.log('Player: Piedra')
    }else if(userOption === 'papel'){
        console.log('Player: Papel')

    }else {
        console.log('Player: Tijera')
    }
}

button.addEventListener ('click', playerPlay);



//contadores


let tries = 0;

function counterPlayer (){
    tries += 1;
    player.innerHTML = ` Jugador: ${tries} `;
   
}


let triesPc = 0;

function counterPc (){
    triesPc += 1;
    pc.innerHTML = ` Computadora: ${tries} `;
}



function game (){
    
    const userOption = select.value;

    
    if ( userOption === 'piedra' && randomNumber <= 3){         response.innerHTML = 'Empate.';    

    }else if (userOption === 'papel' && randomNumber <= 3 ){
        response.innerHTML = '¡Has Ganado!'; 
        counterPlayer();

    }else if (userOption === 'tijera' && randomNumber <= 3 ){
        response.innerHTML = '¡Has Perdido!'
        counterPc ();

    }else if(userOption === 'piedra' && randomNumber <= 6){
        response.innerHTML = '¡Has Perdido!'
        counterPc ();

    }else if(userOption === 'papel' && randomNumber <= 6){
        response.innerHTML = 'Empate.'; 

    }else if(userOption === 'tijera' && randomNumber <= 6){
        response.innerHTML = '¡Has Ganado!';
        counterPlayer(); 

    } else if(userOption === 'piedra' && randomNumber <= 10){
        response.innerHTML = '¡Has Ganado!';
        counterPlayer(); 
    }else if(userOption === 'papel' && randomNumber <= 10){
        response.innerHTML = '¡Has Perdido!'
        counterPc ();
    }else if(userOption === 'tijera' && randomNumber <= 10){
        response.innerHTML = 'Empate.'; 
    }

}


button.addEventListener ('click', game);







// function handleClickUpdate(event){
//     event.preventDefault();
//     playerPlay();
    
// }


