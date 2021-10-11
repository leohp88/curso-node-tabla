const argv = require("yargs")
  .options("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base para multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Lista los resultados",
  })
  .options("h", {
    alias: "hasta",
    type: "number",
    demandOption: true,
    describe: "Es la hasta cuando quieres que se ejecute",
    default: 10,
  })
  .check((argv, option) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    } else {
      return true;
    }
  }).argv;

module.exports = argv;
