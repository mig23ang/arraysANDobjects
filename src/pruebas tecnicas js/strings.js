/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
*/

function contar(cadena) {
    cadena === "" ? console.log("no existe texto")
        : console.log(cadena.length)
}
contar("")

/*
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/

function cortar(cadenaCortar, numero) {
    console.log(cadenaCortar.slice(0, numero))
}
cortar("hola mundo", 4)


/*
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto carácter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/

function separar(textoSeparar, caracter) {
    console.log(textoSeparar.split(caracter))
}
separar("hola mundo", " ")

/*
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

function repetir(texto, veces) {
    for (let index = 0; index < veces; index++) {
        console.log(texto)
    }
}

repetir("hola mundo", 3)

/*
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/
function invertirCadena(cad) {
    const cadenaSeparada = cad.split("");

    console.log(cadenaSeparada.reverse().join(""))
}
invertirCadena("hola");


/*
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.  
*/

const contarRepeticion = (texto, palabra) => {
    let i = 0;
    let contador = 0;
    while (i !== -1) {
        i = texto.indexOf(palabra, i)//buscamos la palabra
        if (i !== -1) { //si la palabra es encontrada suma 1 a la variable i para acumular y suma 1 al contador para devolver la respuesta
            i++
            contador++
        }
    }
    return console.log("la palabra", palabra, "en el texto se repite", contador + " veces")

}
contarRepeticion("hola mundo hola me voy", "hola")

/*
7) Programa una función que valide si una palabra o frase dada, es un palindrome (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
*/
const palindrome = (palabra = "") => {
    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");
    console.log(alReves)
    return (palabra == alReves)
        ? console.log("es palindrome")
        : console.log("no es palindrome")
}
palindrome("aca")


/*
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

const eliminarCaracter = (texto, patron) => {
    console.log(texto.replace(new RegExp(patron, "ig"), ""));
}
eliminarCaracter("lor lor lor lor lor lor ", "o")