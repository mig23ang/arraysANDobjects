// que es EMCA
//* es un estándar de codificación

//!que es un scope :
/**
 * es el entorno donde vamos a definir nuestras variables y métodos
 */

function suma(val1, val2) {
    //
    //todo dentro de la func es el scope
    //
    return val1 + val2
}

//console.log(suma(1, 2))

//todo Ejercicio:
const a = 1;

function sumaE() {
    const b = 2;
    return suma2();
}

const b = 3;
const c = 9;
function suma2() {
    const c = 10;
    return a + b + c;
}
//*que retorna sumaE??
/**retorna 14 porque no entra en el scope de la function por lo tanto no reconoce a b como valor =2  sumaE
 * a diferencia del scope de suma2 donde cambia el valor de c de 9 a 10
 */
console.log(sumaE())
//******************************************************************************************************************************** */

const bunny = {
    name: "conejo",
    tasks: ['speak', 'learn', 'teach'],
    showTask: function () {
        this.tasks.forEach(function (task) {
            console.log(this.name + 'wants to:' + task)
        })
    }
}

bunny.showTask()

/**
 * * se obtienen valores undefined por el concepto de clausura no es posible entrar a this.name que esta en un scope diferente
 */
const bunny1 = {
    name: "conejo",
    tasks: ['speak', 'learn', 'teach'],
    showTask: function () {
        this.tasks.forEach(task => {
            console.log(this.name + '  wants to: ' + task)
        })
    }
}
bunny1.showTask()
/**
 * ! cual es la diferencia entre == o ===
 * que doble == no se fija en el tipo 
 * a diferencia del triple === que si lo hace
 * la buena practica es usar ===
 */

const z = 1; // tipo numero
const y = "1"; //tipo string

//true
console.log(z == y)
//false
console.log(z === y)