//funcion
let aprendiento;

aprendiento = function(){
    console.log('Aprendiendo javaScript');
}

aprendiento = () =>{
    console.log('Aprendiendo javaScript');
}

//Una linea no requiere llave
aprendiento = () => console.log('aprendiendo javaScript');
//Retorna valor
aprendiento = () => 'aprendiendo javaScript';
//console.log(aprendiento());

//Retorna Objeto
aprendiento = () => ({aprendiento: 'Aprendiento javaScrip'});

//Pasar parametros
aprendiento = (tecnologia) => console.log( `aaprendiendo ${tecnologia}` );

//Pasando 1 parametro
aprendiento = tecnologia => console.log(`aaaPrendiendo ${tecnologia}`);

//Pasando 2 parametro
aprendiento = (tecn,tecn2) => console.log(`aaaPrendiendo ${tecn} y ${tecn2} `);

aprendiento('javaScript', 'ES6');
/*
const productos = ['Disco','Camisa','Guitarra'];

const letrasProducto = productos.map(function(producto){
    return producto.length;
});

console.log(letrasProducto);
*/

const productos = ['Disco','Camisa','Guitarra'];

/*
const letrasProducto = productos.map((producto)=>{
    return producto.length
});
*/
/*
//cuando la funcion o el arrow tiene solo un parametro
const letrasProducto = productos.map(productos => productos.length);

console.log(letrasProducto);

*/

productos.forEach(producto =>{
    console.log(producto.length);
});

productos.forEach(producto => console.log(producto));




