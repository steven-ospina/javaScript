//instancaiar ambas clases
const eventBrite = new EventBrite();
const ui = new Iterfaz();

//Listener al buscador
document.getElementById('buscarBtn').addEventListener('click', (e) =>{
    e.preventDefault();
   //console.log('presionado');  

   //leer el texto del input buscar
   const textoBuscador = document.getElementById('evento').value; 

   const categorias = document.getElementById('listado-categorias');
   const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;

   //console.log(textoBuscador);
   //console.log(categoriaSeleccionada);

   //Revisar que haya algo escrito en el buscador
   if(textoBuscador !== ''){
       //console.log('buscando');
       //Cuando hay una busqueda
       eventBrite.obtenerEventos(textoBuscador,categoriaSeleccionada)
        .then(eventos =>{
            console.log(eventos);
        })
   }else{
       //Mostrar mensaje para que imprima algo
       ui.mostrarMensaje('Escribe en el buscador', 'alert alert-danger mt-4')
   }

});