//Variables
const listaTweets = document.getElementById('lista-tweets');



//Event Listeners
eventListeners();

function eventListeners(){
    //cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);
}


//Funciones 


//Añadir 