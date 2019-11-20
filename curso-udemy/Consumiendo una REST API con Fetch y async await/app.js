async function leerTodos(){
    //Esperar la respuesta
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');

    //Procede cuando la respuesta este hecha

    const datos = await respuesta.json();

    return datos;
}

//console.log(leerTodos());

leerTodos()
    .then(usuarios => console.log(usuarios));