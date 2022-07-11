const miArray = ["1", "2", "3", "4", "5", "6"];

// estructura del foreach
//const forEachFunction =(elemento,indice,array) =>{}
//miArray.forEach((element, index, array) => {
// console.log(Number(element) + 2, index, array);
//});
miArray.forEach((element, index, array) => {
  console.log(Number(element) + 2, index, array);
});

// estructura del mao, devuelve un array resultante
let arrayMap = [1, 2, 3, 4, 5, 6];
arrayMap = arrayMap.map((i) => i + 3);
console.log(arrayMap, "aca el nuevo array");