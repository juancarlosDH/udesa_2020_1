window.addEventListener('load', function () {

    //obtengo las peliculas que me gustan
    let peliculas = JSON.parse(window.localStorage.getItem('meGustan'))

    //empiezo a mostrar las peliculas
    let containerPeliculas = document.querySelector('.peliculas');

    //aqui es donde voy a usar la info que vino desde la api
    for(let pelicula of peliculas){
        //aqui uso las comillas francesas
        containerPeliculas.innerHTML += `<div class="pelicula">
        <div class="cont-imgs">
        <a href="detalle_pelicula.html?id=${pelicula.imdbID}">
            <img src="${pelicula.Poster}" alt="" class="peli-img">
            </a>
            <img src="img/premiere.png" alt="" class="banderin">
        </div>
        <div class="rating">
            <i class="fas fa-star star-rating"></i>
            <span class="text-rating">8.5</span>
        </div>
        <h3 class="peli-titulo">${pelicula.Title}</h3>
        <div>
            <a href="javascript:;" class="btn btn-danger" onclick="yaNoMeGustaPelicula('${pelicula.imdbID}')">Ya no me gusta</a>
        </div>
        </div>`;
    }

});
