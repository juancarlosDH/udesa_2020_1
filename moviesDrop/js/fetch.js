window.addEventListener('load', function () {

    //obtengo el query string
    let queryString = window.location.search

    //paso de ese texto a un objeto
    let objetoQuery = new URLSearchParams(queryString);

    //ahora si obtengo lo que mandé por el formulario de busqueda
    let busqueda = objetoQuery.get('busqueda');
    
    //si no le mando nada a buscar, que me traiga las de los vengadores
    if (!busqueda){
        busqueda = 'avengers'
    } 

    //llamo a la funcion, eso es como un fetch, por eso tengo el then
    buscarPeliculasEnAPI(busqueda)
        .then(function(data) {
            //empiezo a mostrar las peliculas
            let peliculas = document.querySelector('.peliculas');

            //aqui es donde voy a usar la info que vino desde la api
            for(let pelicula of data.Search){
                //aqui uso las comillas francesas
                peliculas.innerHTML += `<div class="pelicula">
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
                    <a href="#" id='${JSON.stringify(pelicula)}' class="btn btn-success boton-me-gusta">Me gusta</a>
                </div>
                </div>`;
            }

            let botonesMeGustan = document.querySelectorAll('.boton-me-gusta');

            for (let uno of botonesMeGustan) {
                uno.onclick = function (event) {
                    event.preventDefault();
                    let pelisEnLocal = window.localStorage.getItem('meGustan');
                    let pelisArrayEnLocal = JSON.parse(pelisEnLocal);
                    pelisArrayEnLocal = (pelisArrayEnLocal ? pelisArrayEnLocal : []);
                    pelisArrayEnLocal.push(JSON.parse(this.id));
                    window.localStorage.setItem('meGustan', JSON.stringify(pelisArrayEnLocal));
                }
            }
        })
        .catch(function(error) { console.error(error) });   

    });
