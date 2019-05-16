//Variables
const presupuestoUsuario = prompt('Cual es tu presupuesto Semanal?');
//console.log(presupuestoUsuario);
let cantidadPresupuesto;

//Clases
//Clase de Presupuesto
 class Presupuesto{
     constructor(presupuesto){
         this.presupuesto = Number(presupuesto);
         this.restante = Number(presupuesto);
     }

     //Metodo para ir restando del presupuesto actual
     presupuestoRestante(cantidad = 0){
         return this.restante -= Number(cantidad);
     }
 }

 //Clase de interfaz maneja todo lo relacionado a el html
 class Interfaz{
     insertarPresupuesto(cantidad){
        const presupuestoSpan = document.querySelector('span #total');
        const restanSpan = document.querySelector('span #restante');
     }
 }


//EventLsiteners
document.addEventListener('DOMContentLoaded', function(){
    if(presupuestoUsuario === null || presupuestoUsuario === ''){
        window.location.reload();

    }else{
        //Instanciar un presupuesto
        //console.log('agregado correctamente');
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
        //console.log(cantidadPresupuesto);

        //Intanciar la clase de Interfaze
        const ui = new Interfaz();
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
    }
})
