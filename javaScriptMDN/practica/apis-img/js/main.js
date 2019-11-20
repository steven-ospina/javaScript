//llamar la api imgDogApi
import {callImgDogApi} from './services/api-dog-uno.js';

//obtiene la clase del boton del DOM
const button = document.querySelector('.button');
//crea un evento para llamar las img del api
button.addEventListener('click', () => {
  callImgDogApi();
});


import {callImgDogDos} from './services/api-dog-dos.js';

//obtiene la clase del boton del DOM
const buttonDos = document.querySelector('.buttonDos');
//crea un evento para llamar las img del api
buttonDos.addEventListener('click', () => {
  callImgDogDos();
});
