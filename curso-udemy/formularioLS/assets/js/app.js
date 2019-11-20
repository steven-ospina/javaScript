//Variables
const listaTweets = document.getElementById('lista-tweets');



//Event Listeners
eventListeners();

function eventListeners(){
    //cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    //borrar Tweets
    listaTweets.addEventListener('click', borrarTweet);

    //Contenido cargado
    document.addEventListener('DOMContentLoaded',localStorageListo)
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
    //console.log(tweet);
    
    //Añadir a Local Storage
    agregarTweetLocalStorage(tweet);
}

//elimina el tweet del DOM
function borrarTweet(e){
    e.preventDefault();
    //Delegation 
    if(e.target.className === 'borrar-tweet'){
        console.log('Diste click en eliminar');
        //eliminar con .remove()
        let con = confirm(`deseas eliminar ${e.target.parentElement.textContent}`);
        if(con == true){
            //console.log(e.target.parentElement.remove());
            e.target.parentElement.remove();
            borrarTweetLocalStorage(e.target.parentElement.textContent);
            //console.log(e.target.parentElement.textContent);
        }
        
    }else{
        console.log('diste click en otra parte');
    } 
}

//mostrar datos del localStorage en la lista
function localStorageListo(){
    let tweets;

    tweets = obtenerTweesLocalStorage();

    tweets.forEach(function(tweet){
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
    })
    //console.log(tweets);
}

//Agrega tweet a local storage
function agregarTweetLocalStorage(tweet){
    let tweets;
    //obtener tweets
    tweets = obtenerTweesLocalStorage();
    //añadir nuevo tweet
    tweets.push(tweet);
    //Convertir de String a array para local Storage
    localStorage.setItem('tweets', JSON.stringify(tweets));
    //agregar al local Storage
    //localStorage.setItem('tweets', tweet);
}
//Comprobar que haya elementos en LocalStorage, retorna
function obtenerTweesLocalStorage(){
    let tweets;
    //Revisando los valores de localStorage, retorna un arreglo
    if(localStorage.getItem('tweets') === null){
        tweets = [];
    }else{
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

//Eliminar tweet del local Storage
function borrarTweetLocalStorage(tweet){
    let tweets,tweetBorrar;
    //Elimina la x del tweet
    tweetBorrar = tweet.substring(0, tweet.length -1);

    tweets = obtenerTweesLocalStorage();

    tweets.forEach(function(tweet, index){
        if(tweetBorrar === tweet){
            tweets.splice(index, 1)
        }
        //console.log(tweet);
    });
    //console.log(tweetBorrar);
    //console.log(tweets);
    localStorage.setItem('tweets', JSON.stringify(tweets));
}
