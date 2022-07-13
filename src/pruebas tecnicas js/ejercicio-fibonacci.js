/**
 * dado un numero, mostrar si serie Fibonacci
 * la serie Fibonacci es un orden de números 
 * donde cada numero es la suma de los anteriores
 * 
 * Ejemplo
 * fib(10)[0]
 * fib(10)[1]
 * 
 * serie completa 0,1,1,2,3,5,8,13,21,34,55
 * como hacerlo
 * -crea una función con parámetro numero
 * - crear variables con dos números de la serie
 * - Boucle desde dos al numero
 * - sumar los dos anteriores valors a numero actual 
 * -devolver el resultado
 */

function fibonacci(numero) {
    let serie = [0, 1];

    for (let i = 2; i <= numero; i++) {
        serie.push(serie[i - 1] + serie[i - 2])
    }
    return [serie, serie[numero]]
}
console.log("serie completa ", fibonacci(10)[0])
console.log("resultado fibonacci ", fibonacci(10)[1])