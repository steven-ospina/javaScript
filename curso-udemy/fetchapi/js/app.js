document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarREST)

function cargarTXT(){
    fetch('datos.txt')
        .then(function(res){
            //console.log(res.text());
            return res.text();
        })
        .then(function(data){
            console.log(data);
            document.getElementById('resultado').innerHTML = data;
        })
        .catch(function(error){
            console.log(error);
        });
}


function cargarJSON(){
    fetch('empleados.json')
        .then(function(res){
            //console.log(res);
            return res.json();
        })
        .then(function(data){
            //console.log(data);
            let html = '';
            data.forEach(function(empleado){
                html += `
                    <li><b>Nombre:</b> ${empleado.nombre} <b>puesto:</b> ${empleado.puesto}</li>
                `;
            })

            document.getElementById('resultado').innerHTML = html;
        })
        .catch(function(error){
            console.log(error);
        });
}

function cargarREST(){
    fetch('https://picsum.photos/list')
        .then(function(res){
            //console.log(res);
            return res.json();
        })
        .then(function(imagenes){
            //console.log(imagenes);
            let html = '';
            
            imagenes.forEach(function(imagen){
                html += `
                    <li>
                        <a target="_blank" href="${imagen.post_url}">Ver imagen</a>
                        ${imagen.author}
                    </li>
                `;
            });

            document.getElementById('resultado').innerHTML = html;
        })
        .catch(error => console.log(error));
}