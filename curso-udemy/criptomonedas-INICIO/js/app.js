const cotizador = new API('5a90c0287f03f4a108f77773c75bcf169d783d9c01714ba563f5e97c882d3de9');//apikey
const ui = new Interfaz();

cotizador.obtenerMonedasApi();  

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
        cotizador.obtenerValores(monedaSeleccionada,criptoMonedaSeleccionada)
            .then(data =>{
                //console.log(data);
                ui.mostrarResultado(data.resultado.RAW,monedaSeleccionada,criptoMonedaSeleccionada);
            })
        //console.log('todo bien');
    }
});
