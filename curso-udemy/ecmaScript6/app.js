/*
//Asignacion por Destructuring
const cliente = {
    nombre : 'alejandro',
    tipo : 'Premium'
}

nombre = 'pedro';
tipo = 'gold';

({nombre, tipo} = cliente);

//let {nombre, tipo} = cliente;

console.log(nombre);
console.log(tipo);
*/
/*
let nombre = cliente.nombre,
    tipo = cliente.tipo;
    console.log(nombre);
    console.log(tipo);    
*/

/*
//como acceder a objeto dentro de un objeto
const cliente = {
    tipo : 'Premium',
    nombre : 'Antonio',
    datos : {
        ubicacion : {
            ciudad : 'Medellin',
            pais : 'Colombia'
        },
        cuenta : {
            desde : '10-10-2010',
            saldo : '40000'
        }
    }
} 

//console.log(cliente);
let {datos : {ubicacion}}= cliente;
console.log(ubicacion);
console.log(ubicacion.ciudad);
console.log(ubicacion.pais);

let {datos : {cuenta}}= cliente;
console.log(cuenta);
console.log(cuenta.desde);
console.log(cuenta.saldo);
*/

/*
//poner valores por default
const cliente = {
    nombre : 'predro',
    tipo : 'Premium',
    saldo : 3000
}
//saldo =  0, tipo = 'basico'
let {nombre,tipo = 'basico',saldo = 0} = cliente;

console.log(nombre);
console.log(tipo);
console.log(saldo);
*/

/*
//Destructuring a Arreglos y Objetos
const ciudades = ['Londres','New york','Madrid','Paris'];

//const [primeraCiudad,SegundaCiudad] = ciudades;
//console.log(primeraCiudad);
//console.log(SegundaCiudad);

const [ , , , paris] = ciudades;

console.log(paris);
*/

/*
const ciudades = ['Londres','New york','Madrid','Paris', {idioma : 'Ingles'}];

console.log(ciudades);

[idioma] = ciudades;

console.log(idioma);
*/

/*
//Ejemplo avanzado
const cliente = {
    tipo : 'Premium',
    saldo : 3000,
    datos : {
        nombre : 'Pedro',
        apellido : 'Perez',
        recidencia : {
            ciudad : 'Mexico'
        }
    },
    movimentos : ['12-03-2018','12-03-2017','12-03-2016']
}

let {tipo,datos,datos : {recidencia},movimentos : [uno,dos]}= cliente;

//console.log(tipo);
//console.log(datos);
//console.log(recidencia);

//console.log(movimentos);
console.log(uno);

*/

//Destructuring a funciones
//metodo viejo o forma anterior
/*
function reserevacion(completo, opciones){
    opciones = opciones || {};

    let metodo = opciones.metodoPago,
    cantidad = opciones.cantidad,
    dias = opciones.dias;

    console.log(metodo);
    console.log(cantidad);
    console.log(dias);
}

reserevacion(
    true,
    {
        metodoPago : 'tarjeta',
        cantidad : 200,
        dias : 3
    }
);

function reserevacion(completo, opciones){
    
    let {metodoPago,cantidad,dias} = opciones
    
    console.log(metodoPago);
    console.log(cantidad);
    console.log(dias);
}

reserevacion(
    false,
    {
        metodoPago : 'tarjeta',
        cantidad : 200,
        dias : 3
    }
    ); 
    //asignarle valores por defecto
    
    function reserevacion(completo,
        {   metodoPago = 'efecttivo',
        cantidad = 0,
        dias = 0
    } = {}
    ){
        
        console.log(metodoPago);
        console.log(cantidad);
        console.log(dias);
        
        if(completo){
            console.log('Proceder a reservar..');
        }else{
            console.log('Abandonar');
        }
    }
    
    reserevacion(
        true,
        {
            metodoPago : 'tarjeta',
            cantidad : 200,
            dias : 3
        }
        );
*/

//Symbol
/*
const simbol = Symbol();

console.log(Symbol() === Symbol());//Retorna false por que un symbol es diferente

console.log(typeof simbol)

let nombre= Symbol();
let apellidos = Symbol();

//Crear una persona
let persona = {}
persona.nombre = 'Perro';
persona[nombre] = 'Melo';
persona[apellidos] = 'caramelo'
persona.saldo = 1000;
persona.tipoCliente = 'Normailita';

//console.log(persona);

//console.log(persona[nombre]);

for(let i in persona){
    console.log(`${i} : ${persona[i]}`)
}

//los symbol son varibles que estan privadas
*/


//Sets
/*
let carrito = new Set();

carrito.add('Camisa');//para agregar al set
carrito.add('Zaptos');
carrito.add('carecola');

//console.log(carrito);
//console.log(carrito.size);//el tamaño de nuetro set

let numeros = new Set([1,2,3,4,5,6,7,8,9,0,1,2,11]);

//console.log(numeros);
//console.log(numeros.size);

//Comprobar que un valor exista
//console.log(carrito.has('carecola'));
//eliminar algo del set
carrito.delete('carecola');

//Vaciar todo el set
//carrito.clear();

//Recorrer se con forEach

carrito.forEach((producto, index) =>{
    console.log(`${index} : ${producto}`);
    //la llave y le valor son iguales
});;

//como convertir un set en Array

const arregloCarrito = [...carrito]

console.log(arregloCarrito);
*/

//Maps
/*
let cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('tipo','Premiun');
cliente.set('saldo', 3000);

//Acceder alos valores
//console.log(cliente.get('nombre'));
//console.log(cliente.get('tipo'));
//console.log(cliente.get('saldo'));
//console.log(cliente);


//Metodos para el maps

//Para obtener el tamaño del maps
//console.log(cliente.size);
//Si queremos comprobar que un valor exista
//console.log(cliente.has('tipo'));
//para obtener un valor
//console.log(cliente.get('nombre'));
//Para borrar un elemento del maps
//cliente.delete('nombre');
//console.log(cliente.has('nombre'));
//Limpiar el maps
//cliente.clear();
//console.log(cliente);


//Mandar propiedades por default
const paciente = new Map(
    //Mandamos los valores por defecto
    [['nombre','paciente']],
    [['habitacion','No Definido']]
);

paciente.set('nombre','Antonio');
paciente.set('habitacion',400);

console.log(paciente);

//Un maps puede recorrece por un ForEach
paciente.forEach((datos,index) =>{
    console.log(`${index}: ${datos}`);
});
*/

/*
//Iteradores
//anteriores
for(let i = 0; i < 10;i++){
    console.log(i);
}
//
function crearInterador(carrito){
    //Inicializamos el indice
    let i = 0;
    
    return{
        siguiente :() =>{
            let fin = (i >= carrito.length);

            let valor = !fin ? carrito[i++] : undefined;

            return{
                fin : fin,
                valor : valor
            }
        }
    }
}

const carrito = ['prodcuto 1','prodcuto 2','prodcuto 3','prodcuto 4'];

const recorrerCarrito = crearInterador(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
*/

//Generadores

//es una function que va a devolver un iterador, se indica con un * despues de la palabra function
/*
function *crearGenerador(){
    //yield
    yield 1;
    yield 'Nombre';
    yield 3+3;
    yield true;
}

const iterador = crearGenerador();

console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
//////////////////////7
function *neuvoGenerador(carrito){
    for(let i =0; i< carrito.length; i++){
        yield carrito[i];
    }
}

//Creamos el carrito
const carrito = ['prodcuto 1','prodcuto 2','prodcuto 3','prodcuto 4'];

//Recorremoes el iterador
let iterador = neuvoGenerador(carrito);

console.log(iterador.next().value);
console.log(iterador.next().done);
*/


//Expresiones regulares 

const exp1 = new RegExp('/abc/');
const exp2 = /abc/;

console.log(exp1);  
console.log(exp2);

let valor, expReg;

//expReg = /[0123456789]/;
expReg = /[0-9]/;
valor = 1992

console.log(expReg.test(valor));

//Buscar una fecha con exprecion regular 20-10-2019
expReg = /\d\d-\d\d-\d\d\d\d/
valor = '20-10-2019';

console.log(expReg.test(valor));

//Hora 10:30
expReg = /\d\d:\d\d/
valor = '10:30 AM';

console.log(expReg.test(valor));    

//Hora 10:30
expReg = /\d\d:\d\d \D\D/
valor = '10:30 AM';

console.log(expReg.test(valor));

expReg = /\d\d\d\d/
valor = 1234;

console.log(expReg.test(valor));

expReg = /\d+/
valor = 1234;

console.log(expReg.test(valor));

//Negar la expresion

expReg = /[^0-9]/;
valor = -1992

console.log(expReg.test(valor));

//La sintaxis con llaves {1,2}
//fecha
expReg =/\d{1,2}-\d{1,2}-\d{4}/
valor = '10-10-2019';//true
valor = '1-1-2019';//true
valor = '1-100-2019';//false
valor = '10-10-203';//false

console.log(expReg.test(valor));

//Letras o numeros
expReg =/\w+///la w solo numeros y letra y el + para esperar mas caracteres
valor = 'mensaje de prueba';
valor = 1234;
valor = ' ';//espacio vacio no cuenta como numeros o letras

console.log(expReg.test(valor));

//Revisar qie sena purso nuemros
expReg = /\d+/
valor = 123//true
valor = 'hola';//false

console.log(expReg.test(valor));

//otra forma de saber si solo son numeros

expReg = /([0-9])\w+/;
valor = 1234;
valor = 'Hola mundo';

console.log(expReg.test(valor));

//Texto sean puras mayusculas
expReg = /([A-Z])\w+/
valor = 'hola mundo';//false
valor = 123;//false    
valor = 'ABC'//true
console.log(expReg.test(valor));

//letras en minusculas

expReg = /([a-z])\w+/
valor = 123;//false    
valor = 'ABC'//false
valor = 'hola mundo';//true
console.log(expReg.test(valor));

//EXP regular mail
// expReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}}))$/;

// valor = 'correo@gmail';

// console.log(expReg.test(valor));