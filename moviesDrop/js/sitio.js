window.onload = function () {

    //capturo al menu que barras por su id
    let menu = document.querySelector('#menu-toggle');

    let navegacion = document.querySelector('nav.navigation');

    //capturo al articulo del formulario
    let divForm = document.querySelector('#formulario');
    divForm.style.display = 'none';

    let nueva = document.querySelector('#boton-peli');
    
    //aqui le coloco en el parametro "e" para evitar que se vaya a nueva_pelicula.html
    nueva.onclick = function (event) {
        event.preventDefault();
        
        divForm.style.display = 'block';
    }


    menu.onclick = function () {
        //navegacion.style.backgroundColor = 'red';
        if (navegacion.style.display == 'none') {
            navegacion.style.display = 'block';
        } else {
            navegacion.style.display = 'none';
        }
    }
    


}