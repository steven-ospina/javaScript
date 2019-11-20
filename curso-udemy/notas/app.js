//document.getElementById('app').innerHTML = "hola munndo";

//let nombre = prompt('cual es tu nombre? ');

//let edad = prompt('Cual es tu edad');

//let ensayo = 'aprendiendo javaScript';
/*
//relog
function hr(){
    let dat = new Date();
    let hora = dat.getHours();
    let minutos = dat.getMinutes();
    let segundos = dat.getSeconds();
    let milisegundos = dat.getMilliseconds();
    document.getElementById('app').innerHTML = `Hora : ${hora},<br> minutos : ${minutos},<br> segundos : ${segundos},<br> milisegundos : ${milisegundos}`; 
}

setInterval(hr, 1);
*/

//document.getElementById('app').innerHTML = hr;

//document.getElementById('app').innerHTML = `Bienvenido ${nombre} y tienes ${edad} años`;

//console.log(ensayo.substring(0,11));
//console.log(ensayo.slice(-10));
//console.log(ensayo.split(','));
//console.log(ensayo.replace('javaScript', 'Hijo de la chingada'));
//console.log(ensayo.includes(9));
//console.log(ensayo.repeat(2) + ' ');

//=======operadores===
/*
const numero1 = 30,
      numero2 = 20,
      numero3 = 20.20,
      numero4 = .1020,
      numero5 = -3;

let resultado;
//suma
resultado = numero1 + numero2;
//resta
resultado = numero1 - numero2;
//multiplicacion
resultado = numero1 * 2;
//division
resultado = numero1 / numero2;
//Modulo
resultado = numero1 % numero 2;
//PI
resultado = Math.PI;
//redondeo
resultado = Math.floor(2.99);
//Raiz cuadrada
resultado = Math.sqrt(144);
//absoluto
resultado = Math.abs(numero5);
//potencia
resultado = Math.pow(8, 3);
//Minmo
resultado = Math.min(3,6,5,1,9,7,8);
//Maximo88
resultado = Math.max(3,6,5,1,9,7,8);
//aleatorio
resultado = Math.random();


resultado = (10 + 20 + 30) * 5;

resultado = (10 + 20 + 20 +10 +40)* .20;

let puntaje = 10;

puntaje += 3; => 13

puntaje -= 3; => 10


//para seber que tipo de dato esta conformada la variable

let valor;
console.log(typeof(valor)) or console.log(typeof valor);

*/

/*
let arr = document.getElementsByTagName("p");
for (let x = 0; x < arr.length; x++) {
    arr[x].innerHTML = "hola perra otra ves";
    
}
*/
/*
//como comparar en javaScrip
const numero1 = 20;
const numero2 = 50;
const numero3 = "20";

//console.log(numero1 > numero2);//false
//comparador igual
//=,==,=== el de tres es mas estricto
//ABCDEF asta XYZ son de menor rango y
//abcdef asta xyz son de mayor rango ejemplo:
//console.log('a' > 'A');//true
//console.log('A' > 'a');//false
*/
/*
//como convertir numeros de int a string en javascript
const numero1 = "50",
      numero2 = 10,
      numero3 = 'tres';

//console.log(numero1 + numero2);
console.log(Number(numero1) + numero2);//Number()para convertir a numero
console.log(parseInt(numero1) + numero2);//parseInt()para convertir a numero
//console.log(typeof parseInt(numero1));//parseInt()para convertir a numero
//NaN = no es un numero, que no se puede convertir a numero por que no es un numero
let dato;
dato = Number("20");
dato = Number('20.10931');
dato = Number(true);
dato = Number(false);
dato = Number(null);
dato = Number(undefined);
dato = Number('hola mundo');
dato = Number([1,2,3,4]);

//parseFloat y parseInt 
dato = parseInt('100');
dato = parseFloat('100.3230');
dato = parseInt('100.3230');//elimina el numero decimal

//toFixed
dato = 1003230;
dato = 1003230.1312312;
console.log(dato.toFixed(3));//toFixed elimina los numeros decimales de un numero entero, solo funciona con numeros enteros
dato = '102312332.123231';

console.log(parseInt(dato).toFixed(2));//se parsea en int para que se pueda utilizar el toFixed

console.log(dato);
*/
/*
//convertir numeros a string
let cp ;

cp = 90210
cp = String(cp);
//console.log(cp.length);

let dato;

dato = '4' + '4';//estoy sumando dos objetos, en total son 2

//Booleanos
dato = true;
dato = String(dato);

console.log(dato.length);
console.log(typeof dato);

//Dea arreglo a String

dato = String([1,2,3]);

console.log(dato);
console.log(dato.length);

// toString()
dato = 20;
dato = true;
dato = [1,2,3];
dato = dato.toString();
*/

/*
//Template literales o string Template
const producto1 = 'Pizza',
precio1 = 30,
producto2 = 'Hamburgesa',
precio2 = 40;

let html;
*/
//fomra vieja de crear un template literal
/*
html = '<ul>'+
        '<li>Orden: '+ producto1 + '</li>'+
        '<li>Precio: '+ precio1 + '</li>'+
        '<li>Orden: '+ producto2 + '</li>'+
        '<li>Precio: '+ precio2 + '</li>'+
        '<li id="hola">Total: '+ (precio1 + precio2) + '</li>'
        '</ul>'

document.getElementById('app').innerHTML = html;
//fomra nueva de crear un template literal
html = `
<ul>
<li>Orden: ${producto1}</li>
<li>Precio: ${precio1}</li>
<li>Orden: ${producto2}</li>
<li>Precio: ${precio2}</li>
<li>Total: $${total(precio1,precio2)} </li>
</ul>`;

function total(precio1, precio2){
    return precio1 + precio2;
}
document.getElementById('app').innerHTML = html;
 */

/*
//arreglos(Array) en javaScript

const numeros = [10,20,30,40,50];
//console.log(numeros);

//Array de String (metodo Alternativo)
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');
//añadir en un array
meses[4] = 'Mayo';
//insertar sin necesidad de []
meses.push('Junio');
//console.log(meses[5]);

//Array mezclado 
const mezclado = ['Hola',20,true,null,false,undefined];
//console.log(mezclado);

//como saber sin una Array es en realidad un array
//console.log(Array.isArray(meses));

//como Encotrar un elemento en el array
//console.log(meses.indexOf('Febrero'));//busque y imprime en que posicion esta el valor a buscar 

//como agregar un elemento en una Array al inicio
meses.unshift('Meses:');
//console.log(meses);

//como eliminar un elemento final de un array
meses.pop();

//como eliminar un elemento incio de un array
meses.shift();

//quitar depediendo de la posicion
meses.splice(2,1);//el primer valor que toma[2] es la posicion del array que desea eliminar, y el segundo valor es cuantos desea eliminar desde la posicion que esta hasta la posicion final.

//como revertir un array
meses.reverse();

//como unir un array con otro array
let $array1 = [1,2,3],
    $array2 = [4,5,6];

//console.log($array1.concat($array2));

//como ordenar un array por orden alfabetico y solo con caracteres string 
const frutas = ['platanos', 'manzanas', 'fresas', 'naranja'];
frutas.sort();

//como ordenar numeros en un array de forma acendente
$array1 = [3,9,91,92,23,45,100,21,56,1,200,10];
//$array1.sort();//organiza los nuemros en array, pero solo toma el primer valor que tenga el numero 
$array1.sort(function(x, y){//para que se pueda oraganzar bien el array numerico
    return x - y;
} );

//como ordenar numero en un array de forma decedente
$array1.sort(function(x, y){//esta forma lo organiza de forma alreves 
    return y - x;
} );

//como modificar un array que este definido como const
const $numeros = [1,2,3];

$numeros[0] = 4;//se puede modificar solo una array a la ves 
$numeros.push(10);//con esto acedemos al ultimo valor del array, y lo modificamos

console.log($numeros);
*/

/*
//crear obejetos en JavaScrip
const persona = {
      nombre : 'Ramiro',
      apellido : 'rasales',
      profesion : 'Diseñador grafico',
      email : 'correo@correo.com',
      edad : 21,
      musica : ['trance', 'rock', 'regueeton'],
      hogar : {
          ciudad : 'Medellin',
          ciudad : 'Colombia'
      },
      nacimiento : function(){
          return new Date().getFullYear() - this.edad;
      }
}

//persona.musica.push('trap');

//console.log(persona.musica[3]);

//la forma de acceder a un valor de un objeto pero no es recomendada 

//console.log(persona['nombre']);

console.log(persona.nacimiento());

*/

//Function Declaration
/*
function saludar(){
    console.log('Hola catre hp');
}

saludar();
*/

//pasar argumentos a una funcion
/*
function saludar(nombre){
    console.log(`Hola señor ${nombre}`);
}

saludar('pedrito');
saludar('pablo');
saludar('Carolina');
*/
//sumar con funcion 
/*
function sumar(a,b){
    console.log(a + b);
}
sumar(1,2);

function sumar(a,b){
    return a + b;
}
sumar(1,2);

let suma;

suma = sumar(20,10);

console.log(suma);
*/
/*
//8como declara valores undefined cuando el usuario no manda nada

function saludar(nombre = 'usuario'){//forma nueva de mandar datos por defecto
    //if(typeof nombre === 'undefined'){nombre = 'Usuario'}//esta es la forma vieja
    return `hola ${nombre}`;
}

let saludo;

saludo = saludar();
//saludo = saludar('ramon');

console.log(saludo);
*/

/*
//function expression

const suma = function(a = 0,b = 0){
    return a + b ;
}
console.log(suma());


//IIFE

(function(tecnologia){
    console.log(`Creando un IIFE, ${tecnologia}`);
})('javaScript');

//metodos de propiedad
//son cuando una funcion se pone dentro de un objeto
const musica = {
    reproducir : function(id = 'desconocidad'){
        console.log(`Reproduciendo Canción id ${id}`);
    },
    pausar : function(){
        console.log(`Pausando musica`);
    }
}

musica.reproducir(30);
musica.pausar();

//los metodos tambien pueden gurdarse o crearse fuera del objeto
musica.borrar = function(id){
    console.log(`Borrando la cancion con el ID: ${id}`)
} 
musica.borrar(2);
*/

/*
//manejando errores con try catch

function obtenerClientes(){
    console.log('Descargando...');

    setTimeout(function(){
        console.log('completo')
    },3000)
}

obtenerClientes();

//funcion que no existe
try {
    algo();
} catch (error) {
    console.log('BB te equivocaste; '.concat(error))
}finally{
    console.log('no le importa, ejecuta de todos modos');
}
*/

/*
//fechas en javaScript
//en javaScript existe un objeto llamado Date()

const diaHoy = new Date();

//fecha en especifico mes, dia año
let navidad2017 = new Date('12-25-2017');

console.log(navidad2017);

let valor;

valor = diaHoy.getMonth();

valor = diaHoy.getDate();

valor = diaHoy.getDay();
//obtenere el año 
valor = diaHoy.getFullYear();
//obtenere los minutos
valor = diaHoy.getMinutes();
//obtener la hora
valor = diaHoy.getHours();
//milsegundos desde1978
valor = diaHoy.getTime();
//como modificar 
valor = diaHoy.setFullYear(2000);
valor = diaHoy.getFullYear();

console.log(valor);
*/

/*
//estructuras de control
const edad = 18;

if(edad != 18){
    console.log('si puedes entrar al sitio');
}else{
    console.log('No puedes entrar al sitio');
}

//como comprobar que una variable tiene un valor
let puntaje;

if(typeof puntaje != 'undefined'){
    console.log(`El puntaje fue de ${puntaje}`);
}else{
    console.log(`No hay puntaje`)
}
//ejemplo 2

let efectivo = 5000;
let totalCarrito = 300;

if(efectivo > totalCarrito){
    console.log('pago completo');
}else{
    console.log('fondos insuficientes');
}

//else if

let hora = 11;
if(hora > 0 && hora <= 10){
    console.log('buenos dias!');
}else if(hora >10 && hora <= 18){
    console.log('buenas tardes');
}else if(hora >18 && hora <= 24){
    console.log('buenas tardes');
}else{
    console.log('horano valida');
}

//operado or ||
 let $efectivo = 300,
 credito = 300,
 $diponible = $efectivo + credito
 $totalCarrito = 500;

if($totalCarrito < $efectivo || $totalCarrito < credito ){
     console.log('puedo pagar')
}else if($totalCarrito < $diponible){

    console.log('pague con ambos')
}
else{
    console.log('no puedo pagar')
}

//ternario
const logueado = true;

console.log( logueado === true ? 'Si se logueo' : 'no se logueo');
*/

/*
//condicion switch

let metodoPago = 'efectivo';

switch(metodoPago){
    case 'efectivo':
    console.log(`El usuario pago con ${metodoPago}`);
    break;
    case 'cheque':
    console.log(`El usuario pago con ${metodoPago}`);
    break;
    case 'tarjeta':
    console.log(`El usuario pago con ${metodoPago}`);
    break;
    default :
    console.log(`meto de pagodesconocido`);
    break;
}

let mes;

switch(new Date().getMonth()){
    case 0:
        mes = 'Enero';
    break;
    case 1:
        mes = 'Febrero';
    break;
    case 2:
        mes = 'Marzo';
    break;
    case 3:
        mes = 'Abril';
    break;
    case 4:
        mes = 'Mayo';
    break;
    case 5:
        mes = 'Junio';
    break;
    case 6:
        mes = 'Julio';
    break;
    case 7:
        mes = 'Agosto';
    break;
    case 8:
        mes = 'Septiembre';
    break;
    case 9:
        mes = 'Octubre';
    break;
    case 10:
        mes = 'Noviembre';
    break;
    case 11:
        mes = 'Diciembre';
    break;
}

console.log(mes);
*/

/*
//for loops
for(i = 0; i < 10 ;i++){
    console.log(`numero: ${i}`)
}

for(i = 0; i < 10 ;i++){
    if(i == 5){
        console.log(`von en le ${i}`)
        continue;
    }
    console.log(`numero: ${i}`)
}

//como sacar los numero paraes e impares
for(i = 0; i < 10 ;i++){
    if(i % 2 == 0){
        console.log(`El numero ${i} es Par`)
    }else{
        console.log(`El numero ${i} es InPar`)
    }
}

const arregloProductos = ['Camisa','Boleto','guitarra','Disco'];

for(i = 0; i < arregloProductos.length;i++){
    console.log(`tu producto ${arregloProductos[i]} fue agregado`);
}
*/

//interaciones While & Do While
/*
let i = 0;

while(i < 10){
    if(i === 5){
        console.log('Cinco')
        i++;
        continue;
    }else{
        console.log(`numero ${i}`);
        i++;
    }
    
}
*/
//arreglo con while
/*
const musica = ['cancion 1', 'Cancion 2', 'Cancion 3'];
let j = 0;
while(j < musica.length){
    console.log(`reproducendo cancion: ${musica[j]}`);
    j++;
}

//Do While

let i = 0;
do{
    console.log(`numero ${i}`);
    i++;
}while(i< 10);

*/
/*
//correr un arreglo con ForEach & Map

const pendientes = ['tarea','comer','proyecto','aprender JavaScrip'];

pendientes.forEach(function (pendiente, index){
    console.log(`${index}: ${pendiente}`);
});


//Map para recorrer un arreglo de objetos

const carrito =[
    {id: 1, producto: 'Libro'},
    {id: 2, producto: 'Camisa'},
    {id: 3, producto: 'Guitarra'},
    {id: 4, producto: 'Disco'}
]
const nombreProducto = carrito.map(function(carrito){
    return carrito.producto;
});

console.log(nombreProducto);

//ejemplo 2
const automovil = {
    modelo: 'camaro',
    motor: 6.1,
    anio: 1969,
    marca: 'Chevrole'
}

for(let auto in automovil){
    console.log(`${auto} : ${automovil[auto]}`)
}
*/

/*
//Window Object
//Prompt
//const nombre = prompt();

//console.log(`hola ${nombre}`)

//confirm
if(confirm('Eliminar?')){
    console.log('Eliminado');
}else{
    console.log('Nada paso');
}

let altura,anchura;

altura = window.outerHeight;
anchura = window.outerWidth;

console.log(`altura:${altura} & anchura:${anchura}`)

*/
/*
//ubicacion
let ubicacion;
ubicacion = window.location.search;

window.location.href = 'https://www.youtube.com'

console.log(ubicacion);


let ubicacion;
ubicacion = window.location.search;

window.history.go(-1);

console.log(ubicacion);

//Navegador
let ubicacion;

//ubicacion = window.location.search;

ubicacion = window.navigator;
ubicacion = window.navigator.appName; 
ubicacion = window.navigator.appVersion;
ubicacion = window.navigator.userAgent;
ubicacion = window.navigator.language;
console.log(ubicacion);
*/
/*
//Scope
var a = 'a';
let b = 'b';
const c = 'c';


//Scope de la funcion
function functionScope(){
    var a = 'A';
    let b = 'B';
    const c = 'C';
    //console.log('Funciones: '+a,b,c)
}

functionScope();


//Scope de bloque

if(true){
    var a = 'AA';
    let b = 'BB';
    const c = 'CC';
    console.log('Bloque:'+a,b,c);
}
//Scope for
//for(let b = 0; b < 10; a++){
//    console.log(b);
//}


console.log('Globales:'+a,b,c);

*/