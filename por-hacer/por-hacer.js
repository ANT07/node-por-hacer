const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) {
            throw new Error('No se pudo guardar en archivo');
        }
    });
};

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

    console.log(listadoPorHacer);

};

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
};

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
};

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let tarea = listadoPorHacer.find(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (tarea) {
        console.log('Tarea encontrada');
        console.log(tarea);
        tarea.descripcion = descripcion;
        tarea.completado = completado;
    } else {
        console.log('Tarea no encontrada');
    }

    guardarDB();
};

const borrarTarea = (descripcion) => {
    cargarDB();

    let tareaIndex = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (tareaIndex) {
        console.log('Tarea encontrada');
        listadoPorHacer.splice(tareaIndex, 1);
        console.log('Tarea borrada');
    } else {
        console.log('Tarea no encontrada');
    }

    guardarDB();
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrarTarea
}