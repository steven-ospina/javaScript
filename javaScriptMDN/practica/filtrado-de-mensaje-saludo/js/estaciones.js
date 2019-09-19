// let url = 'estaciones-trenes.json';
// let response = await fetch(url);

// if(response.ok){
//     let json = await response.json();
//     console.log(json);

// }else {
//     console.error(`HTTP-Error: ${response.status}` )
// }

//llama la clase del boton obtener con id btn3
const btn = document.querySelector('.btn3');

//esta peticion consume un json y imprime en el DOM lo que consulta 
function peticion() {
    let url = 'estaciones-trenes.json';

    fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(function(result) {
        // console.log(result.estaciones)
        let data = result.estaciones
        let padre = document.getElementById('estaciones');
        for(let i = 0; i < data.length; i++){
            let items = document.createElement("li");
            let message = document.createTextNode(data[i]);
            items.appendChild(message);
            padre.appendChild(items);
            let typ = document.createAttribute("id");
            typ.value = i;
            items.setAttributeNode(typ);
            btn.disabled = true
        }
        // let r =JSON.stringify(result)
        // console.log(r);
    });
}
//esta funcion filtra la informacion obtenida por la funcion anterior
function organizar() {
    let padre = document.getElementById('estaciones').childNodes;
    for(let i = 0; i < padre.length; i ++) {
        let id = padre[i].id;
        let texto = padre[i].textContent;
        let code = texto.slice(0,3);
        let semiC = texto.indexOf(';');
        let name = texto.slice(semiC + 1);
        let result = code + ': ' + name;
        var item = document.getElementById(id)
        item.innerText = result;
        // console.log(id + ' '+ texto)
        // console.log(texto);
    }
}

//estos dos eventos se ejecunta cuando el usuario le da click a los botones que hay en el DOM
document.getElementById("btn3").addEventListener('click', () => {
    peticion();
});
document.getElementById("btn4").addEventListener('click', () => {
    organizar();
});
