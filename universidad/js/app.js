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
/*
const links = document.getElementsByTagName('a');

links[18].style.color = 'red';
links[18].textContent ='Nuevo enlace';

//console.log(links);

//recorrer el array
let enlaceslinks = Array.from(links);
enlaceslinks.forEach(function(enlace){
    console.log(enlace.textContent);
})

*/


//getElementById
/*
let elemento;

elemento = document.getElementById('hero');

elemento = elemento.id

console.log(elemento);
*/
/*
//Query selector
const encabezado = document.querySelector('#encabezado');

//Aplicar Css
encabezado.style.background = '#333';
encabezado.style.color = '#fff'
encabezado.textContent = 'los mejores cursos';
*/
//seleccionar varios elementos del DOM cuando tiene repido el id o la class
//const encabezado = document.querySelectorAll('.enlace');

//seleccinar etiquetas html del DOM con querySelector
//const encabezado = document.querySelector('h1');
//seleccionar img
//const encabezado = document.querySelectorAll('img');
//seleccionar como si fuera Css3
//const encabezado = document.querySelector('.card img');}

//let enlace;
//seleccionar el primer hijo de un padre
//enlace = document.querySelector('#principal a:first-child');
//seleccionar el medio un hijo de un padre
//enlace = document.querySelector('#principal a:nth-child(3)');
//seleccionar el ultimo hijo de un padre
//enlace = document.querySelector('#principal a:last-child');

//console.log(enlace);

/*
//seleccionando multiples elementos en javaScript
let enlaces = document.getElementsByClassName('enlace');

//acceder a los valores dependiendo de la posicion
enlaces = enlaces[0];
//modificar la apariencia
enlaces.style.background = '#333';
//modicar el texto
enlaces.textContent = 'Nuevo enlace'; 

console.log(enlaces);
//convinar o mezclar QuerySelector con getElementByClassName
const listaEnlaces = document.querySelector('#principal').getElementsByClassName('enlace');

console.log(listaEnlaces);
//seleccionar etiquetas HTML por su tag Name
const links = document.getElementsByTagName('a') 
//traer un dato por su posicion
links[18].style.color = 'red';
links[18].textContent = 'nuevo Enlace';

//traer los datos por medio de un Array
let enlaces = Array.from(links);

console.log(links);
//forEach
enlaces.forEach(function(enlace){
    //con esto me estoy trayendo el texto de los enlaces
    console.log(enlace.textContent);
});
*/

/*
//QuerySelectorAll me regresa toda una lista que tiene el DOM en un NodeList
const enlaces = document.querySelectorAll('#principal .enlace');
//const enlaces = document.querySelectorAll('h1') 0 a,img;

//acceder por su posicion
enlaces[1].style.background = 'red'
enlaces[1].textContent = 'Nuevo Enlace';
console.log(enlaces);

//como seleccionar todos los enlaces con QuerySelectorAll
//con la palabra (odd) regreso todos los valores impares
//consultar los selectores Css3 y jquery
const enlaces = document.querySelectorAll('#principal a:nth-child(odd)');

//recorrer con impares 
enlaces.forEach(function(impares){
    impares.style.backgroundColor = 'orange';
    impares.style.color = 'white';
})
console.log(enlaces);

*/

/*
//Traversing
const navegacion = document.querySelector('#principal');

//console.log(navegacion.childNodes); //el childNodes me trae los elementos hijos pero tambien trae los espacios que hayan en las etiquetas

//console.log(navegacion.children);//me regresa lo que si son elementos

//console.log(navegacion.children[0].nodeName); //nodeName me trae el nombre de la etiqueta

console.log(navegacion.children[0].nodeType); //el nodeType regresa numeros que son una lista siguiente:

//1 = Elementos
//2 = atributos
//3 = text Node
//8 = comentarios
//9 = documentos
//10 = doctype

//cambiarle el texto
console.log(navegacion.children[0].textContent = 'Nuevo enlace');
//seleccionar uno mas grande
const barra = document.querySelector('.barra');

//ingresar lo mas profudo de un div
//console.log(barra.children[0].children[0].children);

//ejemplo 2
const cursos = document.querySelectorAll('.card');

//acceder al ultimo
console.log(cursos[0].lastElementChild);
//acceder al primero
console.log(cursos[0].firstElementChild);
//contar los elementos
console.log(cursos[0].childElementCount);

//Traversing del hijo al padre
const enalces = document.querySelectorAll('.enlace');

//ir a la navegacion principal con parentNode
//console.log(enalces[0].parentNode);
//recomendable utilizar el parentElement y utilizar los que sea necesarios
console.log(enalces[0].parentElement.parentElement.parentElement.parentElement.parentElement);
const cursos = document.querySelectorAll('.card');
//ejemplo 3
console.log(cursos[0].parentElement.parentElement.parentElement.children[0].textContent = 'hola perrys');
const enlaces = document.querySelectorAll('.enlace');

//previousSibling regresa los #text o los espacios en blaco
console.log(enlaces[4].previousSibling);
//acceder al elemento previousElementSibling y este recorre loq ue no tienen trinagulito
console.log(enlaces[4].previousElementSibling.previousElementSibling);
//acceder con nextElementSibling
console.log(enlaces[0].nextElementSibling.nextElementSibling.parentElement.children[4]);
*/
/*
//como crear elementos en javaScript
const enlace = document.createElement('a');
//agregamos una clase
enlace.className = 'enlace';
//añadir un id
enlace.id = 'nuevo-id';
//atributo de href
enlace.setAttribute('href','#')
//añadir texto
//enlace.textContent = 'nuevo enlace';
//añadir texto 2
enlace.appendChild(document.createTextNode('Nuevo Enlace'));
//agregarlo al HTML
document.querySelector('#secundaria').appendChild(enlace);
console.log(enlace);
*/

/*
//reemplazando elementos con javaScript
const nuevoEncabezado = document.createElement('h2');

//agregar un id
nuevoEncabezado.id = 'encabezado';
//agregar nuevo texto
nuevoEncabezado.appendChild(document.createTextNode('Los mejores Cursos'));
console.log(nuevoEncabezado);

//Elemento anterio (Sera reeplazado)
const anterio = document.querySelector('#encabezado');
//consultamos el padre con parentElement
console.log(anterio.parentElement);
//seleccionamos el padre
const elPadre = document.querySelector('#lista-cursos');

//Reemplazar para saber como es el orden de los parametros debemos,
//pararnos en la funcion replaceChild y nos dice como es el orden
//el primer parametro es newChild(nuevoHijo) , oldChild(viejo hijo)
elPadre.replaceChild(nuevoEncabezado, anterio);
*/
/*
//Eliminar elementos con javaScript
const enlaces = document.querySelectorAll('.enlace');
const navegacion = document.querySelector('#principal');

//remover un enlace
enlaces[0].remove();
//segunda alternativa
navegacion.removeChild(enlaces[0]);

console.log(enlaces);
//como eliminar atributos

const primerLi = document.querySelector('.enlace');

let elemento;

//obtener una clase de CSS
elemento = primerLi.className;
//como agregar un nueva clase
elemento = primerLi.classList.add('nueva-clase');
//como remover una clase
//elemento = primerLi.classList.remove('nueva-clase');
//retornalor en DOMTokenList que es como un Array
elemento = primerLi.classList;
//leer atributos
elemento = primerLi.getAttribute('href');
//cambiar el atributo
primerLi.setAttribute('href', 'http://youtube.com');
elemento = primerLi;
//trabajar con los nuevos atributos de HTML 5
primerLi.setAttribute('data-id', 20);
//comprobar que tenga un atributo
elemento = primerLi.hasAttribute('data-id');
//eliminar un atributo
primerLi.removeAttribute('data-id');

console.log(elemento);
*/

//Event Listener click al buscador
/*
document.querySelector('#submit-buscador').addEventListener('click', function(event){
    event.preventDefault();//que no realice la accion por defecto
    alert('buscando cursos');   
});


document.querySelector('#encabezado').addEventListener('click', ejecutarBoton);

function ejecutarBoton(e){
    e.preventDefault();
    console.log('ejecuntado con una funcion');
}
document.querySelector('#submit-buscador').addEventListener('click', ejecutarBoton);

function ejecutarBoton(e){
    e.preventDefault();
    let elemento;
    elemento = e;
    elemento = e.target;
    elemento = e.target.id;
    elemento = e.target.className;
    elemento = e.target.innerText;//no trae nada por que el imput no tiene nada
    console.log(elemento);
    
}

document.querySelector('#encabezado').addEventListener('click', function(e){
    e.target.innerText = 'Nuevo Encabezado';
    //e.target.innerText = 2;
    console.log(e.target.innerText);
});

//otros eventos del mouse en Event Listener

const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelectorAll('.enlace');
const boton = document.querySelector('#vaciar-carrito');

//Click
//boton.addEventListener('click', obtenerEvento);
//Doble Click
//boton.addEventListener('dblclick', obtenerEvento);
//Mouse Enter
//boton.addEventListener('mouseenter', obtenerEvento);
//Mouse Leave
//boton.addEventListener('mouseleave', obtenerEvento);
//Mouse over
//boton.addEventListener('mouseover', obtenerEvento);
//Mouse Out
//boton.addEventListener('mouseout', obtenerEvento);
//Mouse down
//boton.addEventListener('mousedown', obtenerEvento);
//Mouse up
//boton.addEventListener('mouseup', obtenerEvento);

encabezado.addEventListener('mousemove', obtenerEvento);

function obtenerEvento(e){
    console.log(`EVENTO: ${e.type}`);//type: nos muestra que evento estamos haciendo
}

//Events Listener para los inputs

const busqueda = document.querySelector('#buscador');
//keydown muestra el evento caundo escribes algo en un input
//busqueda.addEventListener('keydown', obtenerEvento);
//keyup nos muestra cuado soltamos la tecla
//busqueda.addEventListener('keyup', obtenerEvento);
//keypress nos muestra lo que presionamos las teclas
//busqueda.addEventListener('keypress', obtenerEvento);
//focus nos muetra cuado damos clik en el input
//busqueda.addEventListener('focus', obtenerEvento);
//blur nos muetra cuando el usuario da click afuera despues de escribir en input
//busqueda.addEventListener('focus', obtenerEvento);
//cut nos muestra cuando el usuario corta un input un texto
//busqueda.addEventListener('cut', obtenerEvento);
//copy nos muetra cuando el usuario copia un texto de un input
//busqueda.addEventListener('copy', obtenerEvento);
//paste nos muetra cuado el usuario pega un texto en le input
//busqueda.addEventListener('paste', obtenerEvento);

//input revisa todos los eventos anteriores mencionados
//busqueda.addEventListener('input', obtenerEvento);

//change es utlizado para los eventos de un celeccionador
busqueda.addEventListener('change', obtenerEvento);

function obtenerEvento(e){
    //console.log(busqueda.value);//.value nos arrojara lo que el usuario escriba en el input
    //document.querySelector('#encabezado').innerText = busqueda.value; para mostrarlo en DOM
    console.log(`EVENTO: ${e.type}`);
}

//Event Bubbling
//es como si fuera una borbuja que afecta a otros

const card = document.querySelector('.card');
const infoCurso = document.querySelector('.info-card');
const agregarCarrito = document.querySelector('.agregar-carrito');

card.addEventListener('click', function(e){
    console.log('Click en Card');
    e.stopPropagation();//esta funcion detiene la propagacion de eventos
});

infoCurso.addEventListener('click', function(e){
    console.log('Click en Info Curso');
    e.stopPropagation();
});

agregarCarrito.addEventListener('click', function(e){
    console.log('Click en Agregar Carrito');
    e.stopPropagation();
});

*/

//Delegation
//delega funciones para acortar trabajo
document.body.addEventListener('click', elminarElemento);

function elminarElemento(e){
    e.preventDefault();
    //console.log('click');
    //console.log(e.target.classList);

    if(e.target.classList.contains('borrar-curso')){
        //console.log('si');
        console.log(e.target.parentElement.parentElement.remove());
    }
    if(e.target.classList.contains('agregar-carrito')){
        console.log('curso agregado')
    }
}



