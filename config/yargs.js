exports.argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: 'true',
        describe: 'Es la base para tabla de multiplicar'
    })
    .option('l', {
        alias:'listar',
        type: 'boolean',
        default: false,
        describe: 'Mostrar la tabla listada'
    })
    .option('h', {
        alias:'hasta',
        type: 'number',
        default: 0,
        describe: 'Tabla multiplicada hasta el valor ingresado'
    })
    .check((argv) => {
        if (isNaN(argv.b)){
            throw 'La base tiene que ser un numero'
        }
        return true
    })
    .argv