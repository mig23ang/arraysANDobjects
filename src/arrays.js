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
    "computador",
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
const primerValor = words.shift();
console.log(primerValor, "aca el primer valor");

//añadir elemento en la primera posición
words.unshift(0);

//añadir elemento en cualquier posición
const elementoCualquierP = words.splice(3, 0, "cuatro");
console.log(elementoCualquierP, "elemento cualquier");

// filtro de propiedades del array devolviendo un nuevo array con las propiedades sobrantes
const wordsCharacters = words.filter((characters) => characters.length > 5);
console.log(...wordsCharacters);

//splice agregar campos en la posición que yo desee
const miArray = [1, 2, 3, 4, 5, 6];

miArray.splice(3, 0, "juan", "miguel");
console.log(miArray);
