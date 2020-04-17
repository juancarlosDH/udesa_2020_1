
let persona = {
    nombre : 'Juan',
    apellido : 'Gonzalez',
    email : 'juancarlos@digitalhouse.com',
    esProfesor : true,
    aniosProgramacion : 13,
    saludar : function () {
        //para hacer referencia al nombre dentro del objeto literal usamos la palabra reservada this
        return 'Hola A Todos mi nombre es :' + this.nombre;
    }
}

console.log( persona.saludar() );