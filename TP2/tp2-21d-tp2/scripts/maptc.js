import fs from "fs";

/*----------- Modo Asincrónico con Promises (Then/Catch) -----------*/

export const crearArchivoTxtDesdeArchivoJson = (rutaJson, rutaTxt) => {
  return new Promise((resolve, reject) => {
    fs.stat(rutaJson, (error, stats) => {
      if (error) reject(error);
      fs.readFile(rutaJson, (error, datos) => {
        if (error) reject(error);
        else {
          let info = {
            contenidoStr: datos.toString(),
            contenidoObj: JSON.parse(datos),
            size: stats.size,
          };
          fs.writeFile(rutaTxt, JSON.stringify(info, null, "\t"), (error) => {
            if (error)
              throw Error(`Error en escritura de archivo: ${error.message}`);
          });
          resolve(info);
        }
      });
    });
  });
};
