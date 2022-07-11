/*
calcular el precio total de cada item y sumar el precio de todos los items en una factura agregando un descuento a la factura final
*/


const IVA_GENERAL = 1.21;

const item1 = {
    precio: 13,
    cantidad: 2,
    impuesto: 1.06,
    /*para referenciar propiedades del mismo objeto es obligatorio usar functions normales no arrow functions
    calcularTotal: () => {
        console.log("THIS", this)
    }
    */
    //! manera correcta
    calcularTotal: function () {
        return this.precio * this.cantidad * this.impuesto
    }
}
const item2 = {
    precio: 18,
    cantidad: 6,
    impuesto: 1.06,
    //! manera correcta
    calcularTotal: function () {
        return this.precio * this.cantidad * this.impuesto
    }
}
const item3 = {
    precio: 2,
    cantidad: 1,
    impuesto: IVA_GENERAL,
    //! manera correcta
    calcularTotal: function () {
        return this.precio * this.cantidad * this.impuesto
    }
}

const factura = {
    item1,
    item2,
    item3,
    calcularTotal: function (descuento) {
        const total = (this.item1.calcularTotal() + this.item2.calcularTotal() + this.item3.calcularTotal()) * descuento
        /*
        //* mala practica se podría sumar todo aca pero no es correcto
        const total = item1.cantidad * item1.precio * item1.impuesto + item2.cantidad * item2.precio * item2.impuesto + item3.cantidad * item3.precio * item3.impuesto*/
        return total
    }
}
console.log(factura.calcularTotal(0.15))