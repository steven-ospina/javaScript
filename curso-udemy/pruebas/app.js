//Object Literal
/*
const cliente = {
    nombre : 'juan',
    saldo: 1200,
    tipoCliente : function(){
        let tipo;
        if(this.saldo > 1000){
            tipo = 'Gold';
        }else if(this.saldo > 500){
            tipo = 'Platinum';
        }
        else{
            tipo = 'Normal';
        }
        return tipo;
    }
}
*/
//console.log(cliente.tipoCliente());
//console.log(cliente.saldo);


//Metodo alternativo
/*
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = function(){
        let tipo;
        if(this.saldo > 1000){
            tipo = 'Gold';
        }else if(this.saldo > 500){
            tipo = 'Platinum';
        }
        else{
            tipo = 'Normal';
        }
        return tipo;
    }
}   

const persona = new Cliente('pedro', 2000);
const persona2 = new Cliente('pepito', 4000);

console.log(persona,persona2.tipoCliente());

*/

/*
//String
const nombre1 = 'pedro1';
const nombre2 = new String('Pedro');

console.log(typeof nombre1);
console.log(nombre2);


//Numeros
const numero1 = 20;
const numero2 = new Number(20);

console.log(numero1);
console.log(numero2);

//boolean
const boolean1 = true;
const boolean2 = new Boolean(true);

console.log(boolean1);
console.log(boolean2);

//funciones
const funcion1 = function(a,b){
    return a+b;
}

const funcion2 = new Function('a','b','return 1 + 2');

console.log(funcion1(2,3));
console.log(funcion2(3,4));

//Objetos
const persona1 = {
    nombre: 'Juan'
}

const persona2 = new Object({nombre: 'juan'});

console.log(persona1);
console.log(persona2);

//Arreglos
const arreglos1 = [1,2,3,4];
const arreglos2 = new Array(1,2,3,4);

console.log(arreglos1);
console.log(arreglos2);
*/

/*
//Prototypes
function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

//Crear un Prototype
Cliente.prototype.tipoCliente = function(edad){
    let tipo;
    if(this.saldo > 1000){
        tipo = 'Gold';
    }else if(this.saldo > 500){
        tipo = 'Platinum';
    }
    else{
        tipo = 'Normal';
    }
    return tipo;

}

//const cliente1 = new Cliente('Pedro', 100);

//console.log(cliente1);
//console.log(cliente1.tipoCliente());

//Prototipo que imprimes saldo y nombre
Cliente.prototype.nombreClienteSaldo = function(){
    return `nombre: ${this.nombre}, Tu saldo es de ${this.saldo}, Tipo Cliente ${this.tipoCliente()}`
}

//Retirar Saldo
Cliente.prototype.retirarSaldo = function(retiro){
    return this.saldo -= retiro;
}

const cliente1 = new Cliente('Pedro', 100);
const cliente2 = new Cliente('coco', 600);
const cliente3 = new Cliente('zeus', 1100);

cliente2.retirarSaldo(300);

console.log(cliente1.nombreClienteSaldo());
console.log(cliente2.nombreClienteSaldo());
console.log(cliente3.nombreClienteSaldo());

*/

/*
//Heredar Prototypes a otro Objeto
function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

//Prototipo que imprimes saldo y nombre
Cliente.prototype.nombreClienteSaldo = function(){
    return `nombre: ${this.nombre}, Tu saldo es de ${this.saldo}`
}

const cliente1 = new Cliente('Pedro', 100);

console.log(cliente1);

//Banca para empresas
function Empresa(nombre, saldo,telefono,tipo){
    Cliente.call(this, nombre, saldo);

    this.telefono = telefono;
    this.tipo = tipo;
}

//Heredar el prototype de nombreClienteSaldo
Empresa.prototype = Object.create(Cliente.prototype);

const empresa = new Empresa('Vertical', 59000000, 322123123,'desarrollo');

console.log(empresa.nombreClienteSaldo());

*/

/*
//Object create
const Cliente = {
    imprimirSaldo : function(){
        return `hola ${this.nombre} Tu saldo es ${this.saldo}`
    },
    retirarSaldo: function(retiro){
        return this.saldo -= retiro; 
    }
}

//Crear el objeto
const mary = Object.create(Cliente);
mary.nombre = 'Mary';
mary.saldo = 1000;

mary.retirarSaldo(300);

console.log(mary.imprimirSaldo());
*/


/*
//Creando Una clase EcmaScript 6
class Cliente{
    constructor(nombre,apellido,saldo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;
    }

    imprimirSaldo(){
        return `Hola ${this.nombre}, tu saldo es de: ${this.saldo}`
    }

    tipoCliente(){
        let tipo;
        if(this.saldo > 10000){
            tipo = 'Gold';
        }else if(this.saldo > 5000){
            tipo = 'Platinum'
        }else{
            tipo = 'Normal';
        }
        return tipo;
    }

    retirarSaldo(retiro){
        return this.saldo -= retiro;
    }
    
    static bienvenido(){
        return `Bienvenido al Cajero`
    }

}

const maria = new Cliente('Maria', 'perez', 11000);
maria.retirarSaldo(3000);

//console.log(maria);
//console.log(maria.imprimirSaldo());

console.log(Cliente.bienvenido());
*/


//herencia en classes EcmaScript 6
class Cliente{
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    imprimirSaldo(){
        return `Hola ${this.nombre}, tu saldo es de: ${this.saldo}`
    }
    
    static bienvenido(){
        return `Bienvenido al Cajero`
    }

}

const cliente = new Cliente('pedro', 1000);

console.log(cliente.imprimirSaldo());

class Empresa extends Cliente{
    constructor(nombre,saldo,telefono,tipo){
        //va hacia el constructor Padre
        super(nombre, saldo);
        //no existen en el constructor padre
        this.telefono = telefono;
        this.tipo = tipo;
    }

    static bienvenido(){
        return `Bienvenido al Cajero para Empresas`
    }
}

const empresa = new Empresa('Empresa1', 10000, 12123312,'construcion');

//console.log(empresa);

console.log(empresa.imprimirSaldo());
console.log(Empresa.bienvenido());