const argv = require('./config/yargs').argv;
const { crear, getListado, actualizar, borrarTarea } = require('./por-hacer/por-hacer');
const color = require('colors');

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        {
            console.log('Crear por hacer');
            let tarea = crear(argv.descripcion);
            console.log(tarea);
            break;
        }
    case 'actualizar':
        {
            console.log('Actualizar por hacer');
            actualizar(argv.descripcion, argv.completado);
            break;
        }
    case 'listar':
        {
            console.log('Actializa una tarea por hacer');

            let listado = getListado();

            for (const tarea of listado) {
                console.log('===================== Tarea por hacer ========================'.green);
                console.log(tarea.descripcion);
                console.log('Estado : ', tarea.completado);
                console.log('=============================================================='.green);
            }

            break;
        }
    case 'borrar':
        {
            console.log('Borrar una tarea por hacer');

            borrarTarea(argv.descripcion);

            break;
        }
    default:
        {
            console.log('Comando desconocido');
            break;
        }
}