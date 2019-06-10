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

//Iteradores
