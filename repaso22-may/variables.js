window.onload = function () {

    const adn = 'AbbdefGEST';
    //console.log(adn);

    const fechaDeNacimiento = '1990-05-04';
    //console.log(fechaDeNacimiento);

    let dni = 34567890;
    //console.log(dni);

    dni = 647637565;
    //console.log(dni);

    let materias = [
        {
            nombreMateria : 'Programacion I',
            nota1 : 9,
            nota2 : 8
        },
        {
            nombreMateria : 'Historia',
            nota1 : 10,
            nota2 : 8
        },
        {
            nombreMateria : 'Administración',
            nota1 : 7,
            nota2 : 9
        }
    ];

    //Empiezo a poner los datos en el html
    let htmlDni = document.querySelector('#dni');
    htmlDni.innerHTML += dni;

    let htmlFecha = document.querySelector('#fecha');
    htmlFecha.innerHTML = fechaDeNacimiento;

    //ahora voy con las materias
    let htmlMaterias = document.querySelector('#materias');

    htmlMaterias.innerHTML = `<div>
                                <h4>Nombre de la materia</h4>
                                <div>Nota 1:</div>
                                <div>Nota 2:</div>
                                <div>Promedio:</div>
                            </div>`;
}

