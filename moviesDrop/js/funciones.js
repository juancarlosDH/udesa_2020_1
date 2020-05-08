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