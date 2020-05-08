
let nombre = prompt('Dame tu nombre');

let retorno = saludar(nombre);

//llamar por id al primer elemento
let ache4 = document.querySelector('#bienvenida')

ache4.innerHTML = retorno;

ache4.style.color = 'red';

ache4.onclick = function () {
    alert('me clickeaste');
}

ache4.onmouseover = function () {
    ache4.style.display = 'none';
}

let peliculas = document.querySelector('.peliculas')

peliculas.innerHTML = '<div class="pelicula"><img src="img/movies/guardianesdelagalaxia.jpg" alt="" class="peli-img"><img src="img/premiere.png" alt="" class="banderin"><h3 class="peli-titulo">Guardianes de la Galaxia</h3></div>';

peliculas.innerHTML += '<div class="pelicula"><img src="img/movies/avengers.jpg" alt="" class="peli-img"><img src="img/destacado.png" alt="" class="banderin"><h3 class="peli-titulo">Avengers</h3></div>';

peliculas.innerHTML += '<div class="pelicula"><img src="img/movies/starwars2.jpg" alt="" class="peli-img"><img src="img/nuevo.png" alt="" class="banderin"><h3 class="peli-titulo">Star Wars</h3></div>';

//console.log( ache4.innerHTML );

//llamar por clase al primer elemento
let contenedor = document.querySelector('.container');
//console.log(contenedor)

//llamar a un anchor por la etiqueta
let anclaje = document.querySelectorAll('a');
//console.log(anclaje)

//console.log(retorno);

//alert('Hola soy un Alert');

/*let valor = confirm('Quieres ingresar a la pagina');

console.log(valor);

if (valor == true) {
    console.log('si es verdadero')
}*/

/*
let numero = prompt('dame un numero');
if (numero > 0) {
    console.log('Es positivo')
} else if (numero < 0) {
    console.log('Es negativo')
} else if (numero == 0){
    console.log('Es Cero')
} else {
    console.log('No es un numero');
}   */

/*
let auto = true
let dinero = 10000
let aislamiento = false
//si mi dinero es suficiente (10000 o mas) y tengo auto y no hay coronavirus
if (dinero > 9999 && auto == true && aislamiento == false) {
    console.log('Me voy de viaje')
}

//si tengo auto o tengo dinero
if (auto == true || dinero > 9999) {
    console.log('Me voy de viaje')
}
*/
/*
let diaDeLaSemana = 'lunes';

if (diaDeLaSemana == 'lunes' || diaDeLaSemana == 'martes'){
    console.log('voy a clases');
}else if (diaDeLaSemana == 'sabado') {
    console.log ('juego al futbol');
} else if(diaDeLaSemana == 'domingo') {
    console.log ('hago un asado');
} else {
    console.log('estudio');
}

switch (diaDeLaSemana) {
    case 'lunes' :
    case 'martes' :
        console.log('voy a clases'); break;
    case 'sabado' : 
        console.log ('juego al futbol'); break;
    case 'domingo' : 
        console.log ('hago un asado'); break;
    default :
        console.log('estudio'); break;
}
*/
