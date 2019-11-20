document.querySelector('#generar-nombre').addEventListener('submit', cargarNombre);

//Llamda a Ajax e imprimir resultado
function cargarNombre(e){
    e.preventDefault();
    
    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;
    //console.log(origenSeleccionado);
    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;
    //console.log(generoSeleccionado);
    const cantidad = document.getElementById('numero').value;
    //console.log(cantidad);

    let url = '';
    url += 'https://uinames.com/api/?';
    //Si el origen agregarlo a la url
    if(origenSeleccionado !== ''){
        url +=`region=${origenSeleccionado}&`;
    }
    //Si hay un genero agregar a url
    if(generoSeleccionado !== ''){
        url += `gender=${generoSeleccionado}&`
    }
    //Si hay agregada a la url
    if(cantidad !== ''){
        url += `amount=${cantidad}&`
    }
    
    //console.log(url);
    
    //Conectar con AJAX
    //Iniciar XMLHTTRequest
    const xhr = new XMLHttpRequest();
    //Abrimos la conexion
    xhr.open('GET',url,true);
    //Datos impresion del template
    xhr.onload = function(){
        if(this.status === 200){
            //console.log(JSON.parse(this.responseText));
            const nombres = JSON.parse(this.responseText);
            //Generar el HTML
            let htmlNombres = '<h2>Nombres Generados</h2>';
            
            htmlNombres += '<ul class="lista">';
            
            //Imprimir cada nombre
            nombres.forEach(function(nombre){
                htmlNombres += `
                    <li>${nombre.name}</li>
                `;
            })
            
            htmlNombres += '</ul>';

            document.getElementById('resultado').innerHTML = htmlNombres;
        }
    }
    //Enviar el Request
    xhr.send();



}