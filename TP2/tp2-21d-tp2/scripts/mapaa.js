import fs from "fs";

/*----------- Modo Asincrónico con Promises (Async/Await) -----------*/

const obtenerObjDesdeArchivoJson = (rutaJson) => {
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
          resolve(info);
        }
      });
    });
  });
};

export const crearArchivoTxtDesdeArchivoJson = async (rutaJson, rutaTxt) => {
  try {
    let info = await obtenerObjDesdeArchivoJson(rutaJson);
    console.log(info)
    fs.writeFile(rutaTxt, JSON.stringify(info, null, "\t"), (error) => {
      if (error)
        throw Error(`Error en escritura de archivo: ${error.message}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};
