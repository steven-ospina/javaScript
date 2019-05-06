//variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito'); 

//Listeners
cargarEventListeners();

function cargarEventListeners(){
    //Dispara cuando se presiona "Agregar Carrito"
    cursos.addEventListener('click', comprarCurso);

    //Cuando se elimina un curso del carrito
    carrito.addEventListener('click', eliminarCurso)

    //Al vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    //Al cargar el documento mostrar el LocalStorage
    document.addEventListener('DOMContentLoaded', leerLocalStorage);
}


//Funciones
//Funcion que añade el curso al carrito
function comprarCurso(e){
    e.preventDefault();
    //console.log(e.target.classList);
    //Delegation para agregar-carito
    if(e.target.classList.contains('agregar-carrito')){
        //console.log('si');
        const curso = e.target.parentElement.parentElement;
        //console.log(curso);
        //Enviamos el curso seleccionado para tomar sus datos
        leerDatosCurso(curso);
    }

}

//Lee los datos del curso
function leerDatosCurso(curso){
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }

    insertarCarrito(infoCurso);
    //console.log(infoCurso);
    //console.log(curso);

}

//Muestra el curso seleccionado en el carrito
function insertarCarrito(curso){
    const row = document.createElement('tr');
    row.innerHTML =`
        <td>
            <img src="${curso.imagen}" width=100>
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">x</a>
        </td>
    `
    listaCursos.appendChild(row);

    guardarCursoLocalStorage(curso);
}


//Eliminar el curso del carrito del DOM
function eliminarCurso(e){
    e.preventDefault();

    let curso,cursoId;
    if(e.target.classList.contains('borrar-curso')){
        //console.log(e.target.parentElement.parentElement);
        //console.log(e.target.parentElement.parentElement.remove());
        e.target.parentElement.parentElement.remove();
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector('a').getAttribute('data-id');
        
        //console.log(cursoId);
    }

    eliminarCursoLocalStorage(cursoId);
    //console.log('Eliminado');
}

//Elimina los cursos del carrito en el DOM
function vaciarCarrito(){
    //formar lenta
    //listaCursos.innerHTML = '';
    //return false;

    //forma rapida pero (recomendad)
    while(listaCursos.firstChild){
        listaCursos.removeChild(listaCursos.firstChild);
    }

    
    //Vaciar localStorage
    vaciarLocalStorage();

    return false;
}

//Almacena Cursos en el carrito a local Storage
function guardarCursoLocalStorage(curso){
    let cursos;

    cursos = obtenerCursosLocalStorage();
    //el curso seleccionado se agrega al arreglo
    cursos.push(curso);

    localStorage.setItem('cursos', JSON.stringify(cursos));

    //console.log(curso);
}

//comprueba que haya elementos en el Local Storage
function obtenerCursosLocalStorage(){
    let cursoLS;

    if(localStorage.getItem('cursos') === null){
        cursoLS = [];
    }else{
        cursoLS = JSON.parse(localStorage.getItem('cursos'));
    }

    return cursoLS;
}

//Imprime los cursos del local Storage en el carrito

function leerLocalStorage(){
    let cursosLS;

    cursosLS = obtenerCursosLocalStorage();

    cursosLS.forEach(function(curso){
        //construir el template
        const row = document.createElement('tr');
        row.innerHTML =`
            <td>
                <img src="${curso.imagen}" width=100>
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}">x</a>
            </td>
        `
        listaCursos.appendChild(row);
    });

    //console.log(cursosLS);
}

//Elimina el curso por el ID en Local Storage
function eliminarCursoLocalStorage(curso){
    let cursosLS;
    //obtenemos el array de cursos
    cursosLS = obtenerCursosLocalStorage();
    //iteramos comparando el ID del curso borrando con los del LS
    cursosLS.forEach(function(cursoLS, index){
        if(cursoLS.id === curso){
            cursosLS.splice(index,1);
        }
        //console.log(curso.id);
    });
    //Añadir el array actual a Storage
    localStorage.setItem('cursos', JSON.stringify(cursosLS));
    //console.log(cursosLS);
    //console.log(curso);
}

//Eliminar todos los cursos del local Storage

function vaciarLocalStorage(){
    localStorage.clear();
}