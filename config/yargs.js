const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    demand: true,
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente una tarea'
}

const argv = require('yargs')
    .command('listar', 'Listar los elemento por hacer')
    .command('borrar', 'Borrar un elemento por hacer', {
        descripcion
    })
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    }).command('actualizar', 'Actualizar un elemento por hacer', {
        descripcion,
        completado
    }).help().argv;

module.exports = {
    argv
};