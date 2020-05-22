window.onload = function () {

    //capturo al menu que barras por su id
    let menu = document.querySelector('#menu-toggle');

    let navegacion = document.querySelector('nav.navigation');

    //capturo la caja del formulario para esconderla
    let divForm = document.querySelector('#caja-modal');
    divForm.classList.add('ocultar');

    //capturo la caja del formulario para esconderla
    let buttonCerrar = document.querySelector('#cerrar-modal');
    buttonCerrar.onclick = function(event){
        event.preventDefault();
        divForm.classList.toggle('ocultar');
        divForm.classList.toggle('caja-formulario-modal');
    }

    let nueva = document.querySelector('#boton-peli');
    
    //aqui le coloco en el parametro "e" para evitar que se vaya a nueva_pelicula.html
    nueva.onclick = function (event) {
        event.preventDefault();
        
        divForm.classList.toggle('ocultar');
        divForm.classList.toggle('caja-formulario-modal');
    }


    menu.onclick = function () {
        //navegacion.style.backgroundColor = 'red';
        if (navegacion.style.display == 'none') {
            navegacion.style.display = 'block';
        } else {
            navegacion.style.display = 'none';
        }
    }

    //agrego las pelis

    let peliculas = document.querySelector('.peliculas')

    let arrayPeliculas = [
    { titulo : 'Guardianes de la Galaxia', imagen : 'img/movies/guardianesdelagalaxia.jpg' },
    { titulo : 'Avengers', imagen : 'img/movies/avengers.jpg' },
    { titulo : 'Inception', imagen : 'img/movies/inception.jpg' },
    { titulo : 'StarWars 2', imagen : 'img/movies/starwars2.jpg' },
    { titulo : 'Pirates del Caribe', imagen : 'img/movies/piratasdelcaribe.jpg' },
    { titulo : 'Avatar', imagen : 'img/movies/avatar.jpg' },
    { titulo : 'Dead Pool', imagen : 'img/movies/deadpool.jpg' }
    ];

    //recorro el array
    for (let peli of arrayPeliculas) {

        //aqui uso las comillas francesas
        peliculas.innerHTML += `<div class="pelicula">
        <div class="cont-imgs">
        <a href="detalle_pelicula.html">
            <img src="` + peli.imagen + `" alt="" class="peli-img">
            </a>
            <img src="img/premiere.png" alt="" class="banderin">
        </div>
        <div class="rating">
            <i class="fas fa-star star-rating"></i>
            <span class="text-rating">8.5</span>
        </div>
        <h3 class="peli-titulo">` + peli.titulo + `</h3>
        <div>
            <!--<a href="editar_pelicula.html" class="btn btn-success">Editar</a>
            <a href="eliminar_pelicula.html" class="btn btn-danger">Eliminar</a>-->
        </div>
        </div>`;

    }
    


}