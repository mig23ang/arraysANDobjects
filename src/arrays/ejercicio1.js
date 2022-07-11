/* 

agregue el iva a cada uno de los elementos del array y genere
la factura según la cantidad y el precio

*/
const facturas = [
    {
        precio: 23,
        cantidad: 1
    },
    {
        precio: 19,
        cantidad: 2
    },
    {
        precio: 14,
        cantidad: 4
    },
    {
        precio: 22,
        cantidad: 1
    },
    {
        precio: 29,
        cantidad: 6
    },
]
const IVA = 1.06;
const facturaTotal = facturas.map(i =>
    i.precio * i.cantidad * IVA
)
console.log(facturaTotal)

//mostrar el valor de cada objeto
facturaTotal.forEach((element, index) => console.log("Elemento", index, element))

// usamos el reduce para sumar el total de la factura
const total = facturaTotal.reduce((a, b) => {
    console.log(a, "primer valor", b, "segundo valor " + " suma los dos y comienza")
    return a + b
})
console.log(total)

//realizando operación de factura(precio por cantidad) y devolviendo solo facturas con mas de 40

const totalSimple = facturas.map(i => i.precio * i.cantidad).filter((element, index, array) => element > 40);

console.log(totalSimple)