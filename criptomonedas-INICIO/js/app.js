const API = new API();
const ui = new Interfaz();



//leer el formulario

const formulario = document.querySelector('#formulario');


//EventListener
formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
    //console.log('Enviando');

    //Leer la moneda seleccionada
    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

    //Leer la criptomoneda seleccionada
    const criptoMonedaSelect = document.querySelector('#criptomoneda');
    const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;
    //console.log(monedaSeleccionada);
    //console.log(criptoMonedaSeleccionada);


    //Comprobar que ambos campos tengan algo seleccionado
    if(monedaSeleccionada === '' || criptoMonedaSeleccionada === ''){
        //Arrojar una alerta de error

        ui.mostrarMensaje('Ambos campos son Obligatorios','alert bg-danger text-center');

        //console.log('Selecciona algo');
    }else{
        //Todo bien consulta la api
        //console.log('todo bien');
    }
});
