//convierte una cadena de texto en un array
let data = 'perro,gato,pato,leon';

let splass = data.split(',');
console.log(splass);
console.log(splass.length-1);//resta un valor ala consulta

//hace lo contrario del split
let jo = splass.join(';');

console.log(jo);

//extrae todo los datos del array y los imprime en forma de string
let dogName = ['carlos','juanes','cesar','carlitos'];

console.log(dogName.toString());

//ingresa nuevos valores al array 
let myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];

myArray.push('Cardiff');
console.log(myArray);
myArray.push('Bradford', 'Brighton');
console.log(myArray);

//obtiene la longitud(length) de un array
//solo se optiene cuando si ingresa un nuevo valor al array myArray
var newLength = myArray.push('Bristol');
console.log(myArray)
console.log(newLength)