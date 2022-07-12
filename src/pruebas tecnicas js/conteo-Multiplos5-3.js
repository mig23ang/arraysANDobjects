/**
 *
 escribir un algoritmo que imprima los números del 1 al 100 con la condición que si el numero a imprimir es múltiplo de 3 imprima el string "fizz", si el numero es múltiplo de 5 imprima "buzz" y si es múltiplo de los dos "fizzbuzz"
 * 
 */

//* function clásica
function fizbuzz() {

    for (let i = 1; i <= 100; i++) {

        if (i % 3 === 0 && i % 5 === 5) {
            console.log("fizzbuzz")
        } else if (i % 3 === 0) {
            console.log("fizz")
        } else if (i % 5 === 0) {
            console.log("buzz")
        } else {
            console.log(i)
        }
    }
}

console.log(fizbuzz())