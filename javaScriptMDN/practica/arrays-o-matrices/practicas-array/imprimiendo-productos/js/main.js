//llamar la api imgDogApi
import {callImgDogApi} from './services/api-fetch-img-dog.js'

//obtiene la clase del boton del DOM
const button = document.querySelector('.button');
//crea un evento para llamar las img del api
button.addEventListener('click', () => {
  callImgDogApi();
})

//Seleccionando el total de los productos
let totalBox = document.querySelector('.totalBox');
totalBox.textContent = '';
let total = 0;

//obteniendo productos y mostrarlos en el DOM
let url = 'productos.json';
fetch(url)
  .then(response => response.json())
  .then(data => {
    // console.log('Breeds data response: ', data);
    //selecciono la clase de la etiqueta ul del DOM
    const ul = document.querySelector('.output');
    //accedo a los productos consultados en el fetch
    const products = data.productos;
      //ciclo para consultar valor del producto y sumar el total de todos los productos 
      for(let i = 0; i < products.length; i++){
        //separa el valor numerico de la consulta
        let subArray = products[i].split(':');
        //optiene de la consulta el nombre del producto
        let name = subArray[0];
        //optiene de la consulta el valor del producto, y convierte los valores a numericos
        let price = Number(subArray[1]);
        //suma todos los valores de los productos
        total += price
        
        const newItem = document.createElement('li');
        const newContent = document.createTextNode(`${name} - $${price}`)
        newItem.appendChild(newContent);
        ul.appendChild(newItem);
        // console.log(total)
      }

    totalBox.textContent = `Total: $${total.toFixed(2)}`
  })
  .catch(error => console.log(`Ha sucedido un error: ${error}`));