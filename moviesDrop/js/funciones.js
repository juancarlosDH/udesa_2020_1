//mi fabrica de saludar
function saludar(nombre) {
    //console.log(nombre);
    let saludoGeneral;

    if (nombre != '') {
        saludoGeneral = 'Bienvenid ' + nombre;
    } else {
        saludoGeneral = 'Bienvenid invitado';
    }

    return saludoGeneral;
}

//esta funciona la creé para hacer la busqueda si uso el formulario del buscador
function buscarPeliculasEnAPI(busqueda = ''){

    const apiKyDeOmdb = 'a7935ed'; //para tener esta api tienes que registrarte en: http://www.omdbapi.com/
    //llamo a la api de las peliculas
    //debe retornar el fetch, que es una promesa en js
    return fetch('http://www.omdbapi.com/?s='+busqueda+'&apikey='+apiKyDeOmdb+'&page=1')
        .then(function(res){
            //transformo en json
            return res.json();
        })
        .then(function(data){
            //aqui retorno los datos y cuando llame/invoque/ejecute la función es cuando uso el bucle para imprimirlos
            return data;
        })
        .catch(function(error){
            console.error(error);
            return null;
        })
}

function meGustaPelicula(titulo, imdbID, poster){
    //meter esa pelicula en el localStorage solo permite string, vamos a usar json
    //como van a ser varias peliculas, entonces va a ser un array de json
    //obtengo de localStorage
    let peliculaJson = window.localStorage.getItem('meGustan')
    //transformo a JS desde Json
    let peliculasArray = JSON.parse(peliculaJson);
    //si no tiene nada lo coloco como un array vacio
    if (!peliculasArray) {
        peliculasArray = [];
    }
    //genero el objeto a guardar
    let pelicula = { titulo: titulo, imdbID : imdbID, poster: poster}
    //agrego al array esa peli nueva
    peliculasArray.push(pelicula);

    //pero solo puedo meterla como string en formato json, por eso la conierto a un string de jsons
    window.localStorage.setItem('meGustan', JSON.stringify(peliculasArray));
}

function misMeGustan(){
    let peliculaJson = window.localStorage.getItem('meGustan')
    //transformo a JS desde Json
    let peliculasArray = JSON.parse(peliculaJson);

    if (!peliculasArray) {
        peliculasArray = [];
    }

    return peliculasArray;
}

function yaNoMeGustaPelicula(idEliminar){
    //obtengo las pelis
    let peliculasArray = misMeGustan();

    //creo un nuevo array con las pelis a grabar
    let arraySinLaPeli = [];
    //recorro al array para eliminar la peli
    for(let peli of peliculasArray ){
        if(peli.imdbID != idEliminar) {
            arraySinLaPeli.push(peli);
        }
    }

    //reescribo el json
    window.localStorage.setItem('meGustan', JSON.stringify(arraySinLaPeli));    
}