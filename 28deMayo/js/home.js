


fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        
        //trabajo con los datos
        let albums = datos.albums.data;
        //capturamos al elemento html que queremos hacer innerHTML
        let contenedorAlbums = document.querySelector('#albums');
        //recorro el array y lo voy imprimiendo
        for (const album of albums) {
            //creen un contador e incrementenlo
            //var a = 0;
            //a++
            //console.log(a)
            contenedorAlbums.innerHTML += `<div>
                                <h3> ${album.artist.name}</h3>
                                <a href="detalleAlbum.html?id=${album.id}">
                                    <img src="${album.cover_medium}" alt="">
                                </a>
                                <h4>  ${album.title} </h4>
                            </div>`;
            //quiero cortar en 5 albums
            /*if ( a == 5) {
                break;
            }*/
        }

        let artistas = datos.artists.data;
        let canciones = datos.tracks.data;

        
    })
    .catch(function(error){
        console.error(error);
    })