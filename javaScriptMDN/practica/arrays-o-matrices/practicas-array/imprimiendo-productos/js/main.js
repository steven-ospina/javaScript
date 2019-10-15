//llamar la api imgDogApi
import {callImgDogApi} from './services/api-fetch-img-dog.js'

callImgDogApi();

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
    const ul = document.querySelector('.output');
    const products = data.productos;
    let ulContent = '';

      for(let i = 0; i < products.length; i++){
        //separa el valor numerico de la consulta
        let subArray = products[i].split(':');
        //optiene de la consulta el nombre del producto
        let name = subArray[0];
        //optiene de la consulta el valor del producto, y convierte los valores a numericos
        let price = Number(subArray[1]);
        //suma todos los valores de los productos
        total += price
        // console.log(total)
      }

    for (const product of products) {
      const breedContent = `<li>${product}</li>`;
      ulContent += breedContent;
    }
    ul.innerHTML = ulContent;
    //toFixed recorta el numero a dos decimales
    totalBox.textContent = `Total: $${total.toFixed(2)}`
  })
  .catch(error => console.log(`Ha sucedido un error: ${error}`));
