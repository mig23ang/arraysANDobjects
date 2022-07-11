//arrays
var words = [
    "computador",
    "motocicleta",
    "camioneta",
    "carro",
    "piña",
    "bicicleta"
];

//cambiar el valor de una posición del array
words[4] = "casa";
console.log(words, "agregando el nuevo valor")

//arrays
var words2 = [
    "celuco",
    "motocicleta",
    "camioneta",
    "carro",
    "piña",
    "bicicleta"
];

//añadir campo al array
words2.push("rana");
console.log(words2, "añadiendo nuevo elemento")

//extraer el primer elemento
const primerValor = words2.shift();
console.log(primerValor, "aca el primer valor");

//añadir elemento en la primera posición
words.unshift("celuco");
console.log(words, "añadiendo un primer elemento")

//arrays
var words3 = [
    "casita",
    "motocicleta",
    "camioneta",
    "carro",
    "piña",
    "perrito"
];
//añadir elemento en cualquier posición
words3.splice(3, 0, "cuatro");
console.log(words3, "elemento cualquier");

// filtro de propiedades del array devolviendo un nuevo array con las propiedades sobrantes
const wordsCharacters = words.filter((characters) => characters.length > 10);
console.log([...wordsCharacters]);

//splice agregar campos en la posición que yo desee
const miArray = [1, 2, 3, 4, 5, 6];

miArray.splice(3, 0, "juan", "miguel");
console.log(miArray);
