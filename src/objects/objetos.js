const persona = {
    nombre: "miguel",
    apellido: "reyes",
    documento: 123456,
    email: "mmmm@mm",
    cool: true,
    skins: {
        profesion: "ingeniero",
        hobbies: "warzone"
    }
}
//acceder al objeto
console.log(persona.nombre);
console.log(persona["skins"]);
console.log(persona.skins["hobbies"]);
