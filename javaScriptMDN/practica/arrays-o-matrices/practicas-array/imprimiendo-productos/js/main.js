//     let information = {
//         datos : function () {
//             fetch('productos.json')
//             .then(response => {
//                 return response.json();
//             })
//             .then(json => {
//                 return console.log(json.proudctos)
//             })
//             .catch(function(err) {
//                 console.error(err);
//             });
//         }
//     }

// information.datos();

//obtener los productos
function dataInfo(){
    let url = 'productos.json';
    fetch(url)
    .then(function(response) {
        if(response.ok){
            console.info('obteniendo datos:');
           return response.json();
        }else{
            console.error('papi eso no dio, revise el codigo')
        }
    })
    .then(function(json) {
       let datos = json.productos;
       console.log(datos)
       //obtener del DOM la lista donde van los valares
       const list = document.querySelector('.output');
    })
    .catch(function(error) {
        console.warn('ocurrio un error ' + error.message)
    });

}

dataInfo();

//obtener del DOM la etiqueta donde ira el total de todos los productos

// let request = new Request('productos,json' , {
//     method : 'GET'
// });
// console.log('request =', request)
// fetch(request)

//=======
// function foo(i) {
//     if (i < 0)
//       return;
//     console.log('inicio:' + i);
//     foo(i - 1);
//     console.log('final:' + i);
// }

// foo(3);
// fetch('https://dog.ceo/api/breeds/list')
//   .then(response => response.json())
//   .then(data => {
//     console.log('Breeds data response: ', data);

//     const ul = document.querySelector('.output');
//     const breeds = data.message;
//     let ulContent = '';

//     for (const breed of breeds) {
//       const breedContent = `<li>${breed}</li>`;
//       ulContent += breedContent;
//     }
//     ul.innerHTML = ulContent;
//   })
//   .catch(error => console.log(`Ha sucedido un error: ${error}`));

let url = 'productos.json';
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log('Breeds data response: ', data);

    const ul = document.querySelector('.output');
    const breeds = data.productos;
    let ulContent = '';

    for (const breed of breeds) {
      const breedContent = `<li>${breed}</li>`;
      ulContent += breedContent;
    }
    ul.innerHTML = ulContent;
  })
  .catch(error => console.log(`Ha sucedido un error: ${error}`));