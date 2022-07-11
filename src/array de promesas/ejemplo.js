const promise1 = fetch(
    "https://rickandmortyapi.com/api/character/?name=cowboy%20rick"
)
    .then((response) => response.json())
    .then((data) => (data.results[0]));

const promise2 = fetch(
    "https://rickandmortyapi.com/api/character/?name=cult%20leader%20morty"
)
    .then((response) => response.json())
    .then((data) => (data.results[0]));

const promise3 = fetch(
    "https://rickandmortyapi.com/api/character/?name=daron%20jefferson"
)
    .then((response) => response.json())
    .then((data) => (data.results[0]))


//* El promise all resuelve la promesa de todas las peticiones si falla alguna lanza error
Promise.all([promise1, promise2, promise3]).then(allData => console.log(allData))

//! El promise allSettled resuelve la promesa y notifica si alguna de estas falla
Promise.allSettled([promise1, promise2, promise3]).then(allData => console.log(allData))

//? El promise race resuelve la primera promesa la mas rápida en consultar
Promise.race([promise1, promise2, promise3]).then(firstToPromise => console.log(firstToPromise))

//* El promise any resuelve la primera promesa en cumplir independiente si todas las anteriores dieron error
Promise.any([promise1, promise2, promise3]).then(firstToPromiseResolve => console.log(firstToPromiseResolve))