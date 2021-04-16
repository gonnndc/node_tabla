const { argv } = require('./config/yargs')
const { multiplicar } = require('./multiplicar.js')
var colors = require('colors')



const base = argv.base
const listar = argv.listar
const hasta = argv.hasta


multiplicar(base, listar, hasta)
    .then(r => console.log(r))
    .catch(err => console.log(err))
