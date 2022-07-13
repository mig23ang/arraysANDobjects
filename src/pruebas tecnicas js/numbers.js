/*
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/

const numeroAleatorio = () => {
    const numero = Math.round(Math.random() * 100 + 500)
    return console.log(numero)
}

numeroAleatorio()

/*
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
*/

const capicua = (numero) => {
    numero = numero.toString()
    let alReves = numero.split("").reverse().join("")

    return (numero === alReves)
        ? console.log("cumple")
        : console.log("no cumple")
}
capicua(232)



/*
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/

/**
 * Problema:
rotar a la derecha m veces los elementos de un arreglo, donde m >= 0 y el arreglo tiene tamaño n, donde n >= 0. Note que no se pierden elementos en el arreglo.

Ejemplo	Valor de m	Resultado
arr[1,2,3,4]	m = 1	arr[4,1,2,3]
arr[1,2,3,4]	m = 2	arr[3,4,1,2]
arr[1,2,3,4]	m = 3	arr[2,3,4,1]
arr[1,2,3,4]	m = 4	arr[1,2,3,4]

 */

let arr = [1, 2, 3, 4];
const rotar = (array, n) => {
    if (n > 4 || n <= 0) {
        console.log("ingrese un valor entre 1 y 4")
    }
    for (let index = 0; index < n; index++) {
        array.unshift(array[array.length - 1]);
        array.pop();
    }
    return array
}
arr = rotar(arr, 2);
console.log(arr)


/*
12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
*/



/*
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
*/




/*
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/