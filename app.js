const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/config-yargs");
console.clear();
//const base = 5;

//console.log(argv);

/*const [, , arg3 = "base=5"] = process.argv;
const [, base = 5] = arg3.split("=");*/

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombre) => console.log(nombre, "Creado"))
  .catch((err) => console.log(err, "No se pudo crear"));

//Hacer que cuando no este -l no mostrar nada

//option ("l")
//listar
//boleann
//default false
