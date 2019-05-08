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

const cliente1 = new Cliente('Pedro', 100);

console.log(cliente1);