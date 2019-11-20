class Iterfaz{
    constructor(){
        //Iniciar la app al intanciar
        this.init();
        //leer el resultado
        this.listado = document.getElementById('resultado-eventos');
    }

    //Metodo para cuando se inicialice la app
    init(){
        //Llamar a imprimir categorias de la REST API
        this.imprimirCategorias();
    }

    //imprimir categorias
    imprimirCategorias(){
        const listaCategorias = eventBrite.obtenerCategorias()
            .then(categorias =>{
                //console.log(categorias);
                const cats = categorias.categorias.categories;
                //Seleccionar el select de categorias
                const selectCategorias = document.getElementById('listado-categorias');
                
                //Recorremos el arreglo e imprimir los <option>
                cats.forEach(cat =>{
                    const option = document.createElement('option');
                    option.value = cat.id;
                    option.appendChild(document.createTextNode(cat.name_localized));
                    selectCategorias.appendChild(option);
                });
            })
    }

    //lee la respuesta de la API y imprime los resultados
    mostrarEventos(eventos){
        //leer los eventos y agregar los a una variable
        const listaEventos = eventos.events;
        //console.log(listaEventos); 

        //Recorrer los eventos y crear su template
        listaEventos.forEach(evento =>{
            this.listado.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card">

                            <img class="img-fluid mb-2" src="${evento.logo !== null ? evento.logo.url : ''}">

                        <div class="card-body">
                            <div class="card-text">
                            <h2 class="text-center">${evento.name.text}</h2>
                            <p class="lead text-info">Informacion del evento</p>
                            <p>${evento.description.text.substring(0,200)}...</p>
                            <span class="badge badge-primary">Capacidad: ${evento.capacity}</span>
                            <span class="badge badge-secondary">Fecha y hora: ${evento.start.local}</span>
                            <a href="${evento.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar Boletos</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    //Limpiar los resultados previos
    limpiarResultados(){
        this.listado.innerHTML = '';
    }

    //metodo para imprimir mensajes: 2 parametros, mensaje y clases
    mostrarMensaje(mensaje,clases){
        const div = document.createElement('div');
        div.classList = clases;
        //agregar texto
        div.appendChild(document.createTextNode(mensaje));
        //buscar un padre
        const buscadorDiv = document.querySelector('#buscador');
        buscadorDiv.appendChild(div);

        setTimeout(()=>{
            this.limpiarMensaje();
        },3000)
    }
    //Desaparece el mensaje en caso de que exista
    limpiarMensaje(){
        const alert = document.querySelector('.alert');
        if(alert){
            alert.remove();
        }
    }
}