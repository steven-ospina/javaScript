// Eliminar de Local Storage
//localStorage.clear();
/*
let elemento;

elemento = document;

elemento = document.all;
//seleccionar un elemento del dom como si fuera un array
elemento = document.all[10];

//traer un nodo del dom por medio de su etiqueta
elemento = document.head;

//regresar la url o dominio donde estmamos ejemplo:127.0.0.1
elemento = document.domain;
//regresa la url
elemento = document.URL;
//nos regresa el carcater de la pagina
elemento = document.characterSet;
//acceder a todos los formulario
elemento = document.forms;
elemento = document.forms[0];
//para regresar un id del dom
elemento = document.forms[0].id;
//para regresar una clase del dom
elemento = document.forms[0].className;
//para regresar una clase 2 del dom
elemento = document.forms[0].classList;
//acceder al classList con la posicion del array
elemento = document.forms[0].classList[0];
//saber cuantas imagenes hay en el DOM
elemento = document.images;
//traer un imagen por la posicion
elemento = document.images[2];
//traer el src de una imagen 
elemento = document.images[2].src;
//traer la url de la imagen
elemento = document.images[2].getAttribute('src');

//saber cuantos scrips hay en el DOM

elemento = document.scripts;

//ejemplo practico

//arreglas las imagenes por un array
//quitar rl HTMLCollection(28)

elemento = document.images;

let imagenes = document.images;
let imagenesArr = Array.from(imagenes);

//recorrer las imagen por un forEach
imagenesArr.forEach(function(imagen){
    console.log(imagen);
});

console.log(imagenesArr);

console.log(elemento);
*/

//traer elementos individuales del DOM
//getElementById

//let elemento;

//elemento = document.getElementById('hero').id;
//elemento = document.getElementById('hero').className;
//elemento = elemento.id;

//console.log(elemento);

//ensayo

//let encabezado;
//acedder al texto de un objeto 
//encabezado = document.getElementById('encabezado').textContent;
//acedder al texto de un objeto 2
//encabezado = document.getElementById('encabezado').innerText;
//console.log(encabezado);

/*
//Domscrpting
let encabezado;
 
encabezado = document.getElementById('encabezado');

encabezado.style.background = '#333';
encabezado.style.color = '#fff';
encabezado.style.padding = '20px';
//modificar el texto
encabezado.textContent = 'Los mejores cursos';
encabezado.innerText = 'Los mejores cursos';

console.log(encabezado);
*/

/*
//getElementByid
let elemento;

elemento = document.getElementById('hero');

elemento = elemento.id;

console.log(elemento);

//Query Selector
const encabezado = document.querySelector('#encabezado');

//Aplicar Css
encabezado.style.background = '#333';
encabezado.style.color = '#fff';
encabezado.textContent = 'Los mejores cursos';

//seleccionar varios elementos del DOW cuando tiene repetido el id o la class
const encabezado = document.querySelectorAll('.enlace');
//seleccionar etiquetas HTML del DOM con querySelector
const encabezado = document.querySelector('h1');
//seleccionar img
const encabezado = document.querySelectorAll('img');
//seleccionar como si fuera Css3
const encabezado = document.querySelector('.card img');
let enlace;
//seleccionar el primer hijo de un padre
enlace = document.querySelector('#principal a:first-child');
//sseleccionar el del medio hijo de un padre
enlace = document.querySelector('#principal a:nth-child(3)');
//seleccionar el ultimo hijo de un padre
enlace = document.querySelector('#principal a:last-child');

console.log(enlace)
*/

/*
//seleccionar multiples elementos en javaScript
let enlaces = document.getElementsByClassName('enlace')[3];

//acceder por medio de du indice
//enlaces = enlaces[0];
//let enlaces = document.getElementsByClassName('enlace')[3];

enlaces.style.background = '#333';
enlaces.textContent = 'Nuevo enlace';

console.log(enlaces);

//combinar querySelector con document.getElementByClass
const listaEnlaces = document.querySelector('#principal').getElementsByClassName('enlace');

console.log(listaEnlaces);
*/
//seleccionar un etiqueta del DOM
const links = document.getElementsByTagName('a');

links[18].style.color = 'red';
links[18].textContent ='Nuevo enlace';

//console.log(links);

//recorrer el array
let enlaceslinks = Array.from(links);
enlaceslinks.forEach(function(enlace){
    console.log(enlace.textContent);
})




