document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos(){
    //Crear el objeto xmlhttprequest
    const xhr = new XMLHttpRequest();

    //Abrir una conexion
    xhr.open('GET', 'datos.txt', true);

    /*
    //Una vez que carga
    xhr.onload = function(){
        //200: Correcto | 403: Prohibido 404: no encontrado
        if(this.status === 200){
            //console.log(this.responseText);
            document.getElementById('listado').innerHTML = `<H1>${this.responseText}</H1>`
        }
    }

    //Enviar al request
    xhr.send();
    */

    xhr.onreadystatechange = function(){

        console.log(`Estado ${this.readyState}`);

        if(this.readyState === 4 && this.status === 200){
            //console.log(this.responseText);
        }
    }
        //Enviar al request
    xhr.send();
    //ready status
    /*
    0 - no inicializado
    1 - Conexion establecida
    2 - Recibido
    3- Procesado
    4- Respuesta lista 
    */
}