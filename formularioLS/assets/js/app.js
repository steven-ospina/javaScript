//Variables
const listaTweets = document.getElementById('lista-tweets');



//Event Listeners
eventListeners();

function eventListeners(){
    //cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    //borrar Tweets
    listaTweets.addEventListener('click', borrarTweet);
}


//Funciones 


//Añadir tweet del formulario
function agregarTweet(e){
    e.preventDefault();
    //console.log('formulario enviado');
    //leer el valor del textArea
    const tweet = document.getElementById('tweet').value;
    //crear boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'x';
    //crear elemento y añadirle el contendio a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    //añade el boton borrar al tweet
    li.appendChild(botonBorrar);
    //añadir el tweet a la lista
    listaTweets.appendChild(li);
    console.log(tweet);
}

function borrarTweet(e){
    e.preventDefault();
    if(e.target.className === 'borrar-tweet'){
        console.log('Diste click en eliminar')
    }else{
        console.log('diste click en otra parte');
    } 
}