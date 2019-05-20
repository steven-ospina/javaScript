//Variables
const presupuestoUsuario = prompt('Cual es tu presupuesto Semanal?');
//console.log(presupuestoUsuario);
const formulario = document.getElementById('agregar-gasto');
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
        const presupuestoSpan = document.querySelector('span#total');
        const restanSpan = document.querySelector('span#restante');

        //Insertar al HTML
        presupuestoSpan.innerHTML = `${cantidad}`;
        restanSpan.innerHTML = `${cantidad}`;
     }

     imprimirMensaje(mensaje,tipo){
         const divMensaje = document.createElement('div');
         divMensaje.classList.add('text-center','alert');
         if(tipo === 'error'){
             divMensaje.classList.add('alert-danger');
         }else{
             divMensaje.classList.add('alert-success');
         }
         divMensaje.appendChild(document.createTextNode(mensaje)); 

         //Insertar en DOM
         document.querySelector('.primario').insertBefore(divMensaje, formulario);

         //Quitar el alert despues de 3 segundos
         setTimeout(function(){
            document.querySelector('.primario .alert').remove();
            formulario.reset();
         },3000);
     }
     //Insertar los gastos a la lista
     agregarGastoListado(nombreGasto, cantidadGasto){
         const gastoListado = document.querySelector('#gastos ul');
         //Crear un Li
         const li = document.createElement('li');
         li.className ='list-group-item d-flex justify-content-between aling-itens-center';

         li.innerHTML = `
            ${nombreGasto}
            <span class="badge badge-primary badge-pill">$ ${cantidadGasto}</span>
         `;

         //Insertar al HTML
         gastoListado.appendChild(li);
     }

     //Comprueba el presupuesto restante
     presupuestoRestante(cantidad){
         //console.log(cantidadPresupuesto);
         const restante = document.querySelector('span#restante');
         //leemos el presupuesto restante
         const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad); 
         //console.log(presupuestoRestanteUsuario);

         restante.innerHTML = `${presupuestoRestanteUsuario}`;

         this.comprobarPresupuesto();
     }

     //Cambia de color el presupuesto restante
     comprobarPresupuesto(){
        const presupuestoTotal = cantidadPresupuesto.presupuesto;
        const presupuestoRestante = cantidadPresupuesto.restante;
        
        //comprobar el 25%
        if((presupuestoTotal / 4) > presupuestoRestante) {
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-succes', 'alert-warnig');
            restante.classList.add('alert-danger');
        }else if((presupuestoTotal / 2) > presupuestoRestante){
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-succes');
            restante.classList.add('alert-warning');
        }
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
});


formulario.addEventListener('submit',function(e){
    e.preventDefault();
    //console.log('enviado');

    //Lerr del formulario de Gatos
    const nombreGasto = document.querySelector('#gasto').value;
    const cantidadGasto = document.querySelector('#cantidad').value;

    //Instanciar la Interfas
    const ui = new Interfaz();

    //Comprobar que los cmapos esten vacios
    if(nombreGasto === '' || cantidadGasto === ''){
        //console.log('hubo un error');
        //2 parametros: mensaje y tipo
        ui.imprimirMensaje('Hubo un error', 'error');
    }else{
        //console.log('El gasto se agrego');

        //Insertar en el HTML
        ui.imprimirMensaje('Correcto', 'correcto');
        ui.agregarGastoListado(nombreGasto,cantidadGasto);
        ui.presupuestoRestante(cantidadGasto);

    }

})
