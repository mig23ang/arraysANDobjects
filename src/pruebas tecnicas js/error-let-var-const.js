//* si quiero imprimir contratando porque me muestra 2 

function variables() {
    var i = "contratando";

    for (var i = 0; i < 2; i++) {

    }

    console.log(i)
}

variables()

//! porque var deja modificar el lote entero de código deberíamos cambiar var por let dentro del for

function variables1() {
    var i = "contratando";

    for (let i = 0; i < 2; i++) {

    }

    console.log(i)
}

variables1()

//?si usamos const no podemos mutar el valor de const i ojo!  nunca usar una const
//var es igual a variable global 

function variables2() {
    const i = "contratando";

    for (const i = 0; i < 2; i++) {

    }

    console.log(i)
}

variables2()