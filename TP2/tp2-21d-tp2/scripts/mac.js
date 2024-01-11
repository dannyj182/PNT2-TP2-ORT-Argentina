import fs from "fs";

/*----------------- Modo Asincrónico con Callbacks -----------------*/

export const crearArchivoTxtDesdeArchivoJson = (rutaJson, rutaTxt) => {
  fs.stat(rutaJson, (error, stats) => {
    if (error) throw new Error(`Error en fs.stat: ${error.message}`);
    fs.readFile(rutaJson, (error, datos) => {
      if (error) throw Error(`Error en lectura de archivo: ${error.message}`);
      let info = {
        contenidoStr: datos.toString(),
        contenidoObj: JSON.parse(datos),
        size: stats.size,
      };
      console.log(info)
      fs.writeFile(rutaTxt, JSON.stringify(info, null, "\t"), (error) => {
        if (error)
          throw Error(`Error en escritura de archivo: ${error.message}`);
      });
    });
  });
};
