
const busqueda = 'batman'; //esto es lo que quiero buscar, lo vamos a usar con el cuadro de busqueda
const apiKyDeOmdb = ''; //para tener esta api tienes que registrarte en: http://www.omdbapi.com/
//llamo a la api de las peliculas
fetch('http://www.omdbapi.com/?s='+busqueda+'&apikey='+apiKyDeOmdb+'&page=1')
    .then(function(res){
        //transformo en json
        return res.json();
    })
    .then(function(data){
        //empiezo a mostrar las peliculas
        let peliculas = document.querySelector('.peliculas');

        //aqui es donde voy a usar la info que vino desde la api
        for(let pelicula of data.Search){
            //aqui uso las comillas francesas
            peliculas.innerHTML += `<div class="pelicula">
            <div class="cont-imgs">
            <a href="detalle_pelicula.html">
                <img src="` + pelicula.Poster + `" alt="" class="peli-img">
                </a>
                <img src="img/premiere.png" alt="" class="banderin">
            </div>
            <div class="rating">
                <i class="fas fa-star star-rating"></i>
                <span class="text-rating">8.5</span>
            </div>
            <h3 class="peli-titulo">` + pelicula.Title + `</h3>
            <div>
                <!--<a href="editar_pelicula.html" class="btn btn-success">Editar</a>
                <a href="eliminar_pelicula.html" class="btn btn-danger">Eliminar</a>-->
            </div>
            </div>`;
        }

    })
    .catch(function(error){
        console.error(error);
    })


//Para la API de Deezer
/*fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/27')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data)
    })
    .catch(function(error){
        console.error(error);
    });*/