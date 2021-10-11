const fs = require("fs");
const { color } = require("colors");
const crearArchivo = async (base = 5, l = false, h = 10) => {
  try {
    if (l === true) {
      console.log("=====================".green);
      console.log("     Tabla del:".cyan, base);
      console.log("=====================".green);

      let salida = "";
      let consola = "";
      for (let i = 1; i <= h; i++) {
        salida += `${base} * ${i} = ${base * i}\n`;
        consola += `${base} ${"*".green} ${i} ${"=".green} ${base * i}\n`;
      }

      console.log(consola);

      fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

      return `tabla-${base}`;
    } else {
      console.clear();
      console.log("Debe poner el parametro -l");
    }
  } catch (error) {
    throw (error, console.log(error));
  }
};

module.exports = {
  crearArchivo,
};
