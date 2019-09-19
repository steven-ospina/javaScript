//Mensajes que estan el DOM
let mensajes = [
    'Happy Birthday!',
    'Merry Christmas my love',
    'A happy Christmas to all the family',
    'You\'re all I want for Christmas',
    'Get well soon'
]

const padres = document.getElementById('padre');
//incertar los mensajes al DOM
function insertMessages() {
    for (i = 0; i < mensajes.length; i++) {
        let items = document.createElement("li");
        let message = document.createTextNode(mensajes[i]);
        items.appendChild(message)
        padres.appendChild(items)
        // console.log(items);
    }

}

function filro() {
    const consultar = document.querySelectorAll("#padre li");
    for (let i = 0; i < consultar.length; i++) {
        let input = consultar[i];
        let p = document.createElement("p")
        p.textContent = 'hola'  
        // if(consultar[i].indexOf('Christmas') !== -1){
        //     // console.log(input)
        //     // console.log(consultar)
        //     // input.textContent = '';
        //     // console.log(consultar.parentNode.removeChild(input))
        //     // consultar.parentNode.removeChild(item);
        // }
        // console.log(input);

    }
    // console.log(consultar)
}

document.getElementById("btn").addEventListener('click', () => {
    insertMessages();
    // filro();
});
document.getElementById("btn2").addEventListener('click', () => {
    filro();
});





// function getButton(name) {
//     let btn = document.getElementById("btn");
//     btn.innerText = name
//     btn.addEventListener('click',insertMessages)
//     console.log(btn)
// //     // let button = document.createElement("button");
// //     // button.textContent = name;
// //     // document.body.appendChild(button);
// //     // // console.log(button)
// }

// getButton('Filtro');
// getButton('perr'addEventListener('click',() => {
//     getButton('');
// })