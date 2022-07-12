/**
 * Imprimir en un arreglo todas las palabras que tengan más de 5 letras
 */

const words = ['computador', 'motocicleta', 'camioneta', 'carro', 'piña', 'bicicleta'];


const wordsFilter = words.filter(element => element.length > 5);
console.log(wordsFilter)


//* del siguiente arreglo

const frutas = [
    { name: 'manzana', quantity: '4' },
    { name: 'pera', quantity: '2' },
    { name: 'guayaba', quantity: '3' },
    { name: 'maracuya', quantity: '1' }
]
//* Imprimir en un arreglo los datos con inventario mayor a uno
const inventarioMayor = frutas.filter(element => element.quantity > 1);
console.log(inventarioMayor)

//? Mostrar el inventario que tiene la pera
const quantity = frutas.find(element => element.name === "pera")
console.log(quantity["quantity"])

//! Agregar una descripción dentro del mismo arreglo
frutas.description = "description"
console.log(frutas, "agregando")

