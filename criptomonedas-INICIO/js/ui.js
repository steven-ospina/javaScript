class Interfaz{

    constructor(){
        this.init();
    }

    init(){
        this.construirSelect();
    }

    construirSelect(){
        cotizador.obtenerMonedasApi()
            .then(monedas =>{
               //console.log(monedas.monedas.Data); 
               //console.log(Object.entries(monedas.monedas.Data));

               //console.log(monedas);
               //crear un select de opciones
               const select = document.querySelector('#criptomoneda');

               //iterar por los resultados de la api
               for(const [key,value] of Object.entries(monedas.monedas.Data)){
                    //console.log(value);
                    //añadir el symbol y el Nombre como opciones
                    const opcion = document.createElement('option');
                    opcion.value = value.Symbol;
                    opcion.appendChild(document.createTextNode(value.CoinName));
                    select.appendChild(opcion);
               }
            })
    }

    mostrarMensaje(mensaje,clases){
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));
        
        //Seleccionar mensajes
        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div); 

        //Mostrar contenido
        setTimeout(()=>{
            document.querySelector('.mensajes div').remove();
        },3000)
        //console.log(div);
    }

    //Imprime el resultado de la cotizacion
    mostrarResultado(resultado,moneda, Crypto){
        //console.log(resultado[Crypto][moneda]);

        // En caso de un resultado anterior, ocultarlo
        const resultadoAnterior = document.querySelector('#resultado > div');

        if(resultadoAnterior) {
            resultadoAnterior.remove();
        }

        const datosMoneda = resultado[Crypto][moneda];

        //Recortar digitos de precio
        let precio = datosMoneda.PRICE.toFixed(2);
        let procentaje = datosMoneda.CHANGEPCTDAY.toFixed(2);
        let actualizado = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString(); 

        //Construir el template
        let templateHTML =  `
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado:</h2>
                    <p>El Precio ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de : ${precio}</p>
                    <p>Variacion ultimo dia: % ${procentaje}</p>
                    <p>Ultima Actulizacion: ${actualizado}</p>
                </div>
            </div>
        `;
        this.mostrarOcultarSpinner('block');

        setTimeout(() => {
               // insertar el resultado
              document.querySelector('#resultado').innerHTML = templateHTML;

              // ocultar el spinner
              this.mostrarOcultarSpinner('none');
        }, 3000);
    }

    // Mostrar un spinner de carga al enviar la cotización
    mostrarOcultarSpinner(vista) {
        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display = vista;
    }
}