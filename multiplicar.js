const fs = require('fs');
var colors = require('colors')

// export function multiplicar(base = 0) {
//     return new Promise((res, rej) => {
//         let salida = ''
//         for (let index = 1; index < 11; index++) {
//             salida += `${base} x ${index} = ${base * index} \n`
//         }

//         writeFileSync(`./tablas/texto-base-${base}`, salida)
//         console.log(salida)
//         res(`texto-base-${base}.txt ha sido creado`)
//     })
// }


exports.multiplicar = async (base = 0, listar = false, hasta) => {
    try {
        let salida = ''
        let consola = ''
        for (let index = 1; index <= hasta; index++) {
            consola += `${base} ${'x'.red} ${index} = ${base * index} \n`
            salida += `${base} x ${index} = ${base * index} \n`
        }

        if (listar) {
            console.log(colors.magenta(consola))
        }
        
        fs.writeFileSync(`./tablas/texto-base-${base}.txt`, salida)
        return (`texto-base-${colors.cyan(base)}.txt ha sido creado`)

    } catch (err) {
        throw err
    }
}