const root = document.getElementById('root');
const todos = document.getElementById('todos');
const mujer = document.getElementById('mujer');
const hombre = document.getElementById('hombre');

const getData = () => {
    const url = 'https://rickandmortyapi.com/api/character';
    fetch(url) // va a ir a buscar la data a la url que le estamos pasando, y nos retorna una promesa
    // console.log(fetch(url))
        .then(resp => resp.json()) // .then(resp => console.log(resp)) // resp=respuesta // status: por ej:404 es error, TIENE QUE ESTAR EN 200 PARA SABER QUE FUNCIONA BIEN!
        .then(json => {
            printData(json.results)
            data = json;
        })
        .catch(err => console.error(err)) // .catch(err => console.error(err)) // err=error
}

let data = [];

// EN ESTE CASO NO PUEDE LEER EL JSON PORQUE NO ESTA DEFINIDO PORQUE EXISTE SOLO DENTRO DE ESA PROMESA - LO TENEMOS QUE PONER EN LA FILA DE ARRIBA!!
const printData = json => {
    console.log(json) // trae: {info:(), results:[]}
    const arr = json; // console.log(json.results) NO SIEMPRE SE ENCUENTRAN LOS ARR DE DATOS EN "RESULTS" DEPENDE DE LA API ES DONDE VAN A ESTAR
    let card = ''; 
    arr.forEach(personaje => {
        // console.log(personaje)
        const {name, gender, species, status, origin, location, image} = personaje;
        card +=`
            <div class="col s12 m6 l3">
                <div class="card">
                    <div class="card-image">
                        <img src=${image}>
                    </div>
                    <div class="card-content">
                        <p>Nombre: ${name}</p>
                        <p>Genero: ${gender}</p>
                        <p>Species: ${species}</p>
                        <p>Status: ${status}</p>
                        <p>Origin: ${origin.name}</p>
                        <p>Location: ${location.name}</p>
                    </div>
                    <div class="card-action">
                        <a href="#">ver mas...</a>
                    </div>
                </div>
            </div>
            `
    });

    root.innerHTML = card
}
// printData(json); ESTO VA ARRIBA!!!


///////////// PRINT DEL MENU ///////////////

mujer.addEventListener('click', e => {
    // console.log(e.target.id)
    // tenemos que darle acceso a la data!!
    const female = data.results.filter(personaje => personaje.gender === 'Female') // hay que ponerlo tal cual esta en la data
    // console.log(female)
    printData(female); // []
    // console.log(data)
})

hombre.addEventListener('click', e => {
    const male = data.results.filter(personaje => personaje.gender === 'Male')
    printData(male);
})

todos.addEventListener('click', e => {
    const todosPersonajes = data.results
    printData(todosPersonajes);
})



////////////////////////////////////


$( document ).ready(function(){
    $(".dropdown-trigger").dropdown();
    getData();
  })