window.addEventListener('load', function () {

    //obtengo el query string
    let queryString = window.location.search

    //paso de ese texto a un objeto
    let objetoQuery = new URLSearchParams(queryString);

    //ahora si obtengo el id de la pelicula
    let id = objetoQuery.get('id');
    console.log(id)
    //si no le mando nada a buscar, que me traiga las de los vengadores
    if (!id){
        id = 'tt0848228'
    } 

    const apiKyDeOmdb = 'a7935ed'; //para tener esta api tienes que registrarte en: http://www.omdbapi.com/
    //llamo a la api de las peliculas
    //debe retornar el fetch, que es una promesa en js
    return fetch('http://www.omdbapi.com/?i='+id+'&apikey='+apiKyDeOmdb)
        .then(function(res){
            //transformo en json
            return res.json();
        })
        .then(function(data){
            console.log(data);
            let titulo = document.querySelector('#titulo');
            let imagen = document.querySelector('.peli-img');
            let rating = document.querySelector('.text-rating');
            let duracion = document.querySelector('#duracion');
            let lanzamiento = document.querySelector('#fecha-lanzamiento');
            let descripcion = document.querySelector('#descripcion');
            let generos = document.querySelector('#generos');
            let actores = document.querySelector('#actores');

            titulo.innerHTML = data.Title;
            imagen.src = data.Poster;
            rating.innerHTML = data.imdbRating;
            duracion.innerHTML = data.Runtime;
            lanzamiento.innerHTML = data.Year;
            descripcion.innerHTML = data.Plot;
            generos.innerHTML = data.Genre;
            actores.innerHTML = data.Actors;

        })
        .catch(function(error){
            console.error(error);
            return null;
        })

    });
