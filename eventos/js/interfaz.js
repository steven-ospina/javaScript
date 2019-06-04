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