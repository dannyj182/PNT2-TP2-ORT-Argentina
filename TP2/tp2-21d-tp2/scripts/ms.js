import fs from "fs";

// Modularizando no me funcionó porque el callback me demora el dato
// del size, entonces tuve que meter todo dentro del cb, eso me
// generó otro problema porque no supe como obtener el objeto
// mediante return dentro del cb, entonces, dentro del cb hice todo

// Using fs.stat() to check for the existence of a file before calling
// fs.open(), fs.readFile(), or fs.writeFile() is not recommended.
// Instead, user code should open/read/write the file directly and
// handle the error raised if the file is not available.

// Iba a usar else if (stats.isFile()) pero debido a la recomendación
// que está en la documentación oficial de Node.Js no lo hice

/*------------------------- Modo Sincrónico -------------------------*/

export const crearArchivoTxtDesdeArchivoJson = (rutaJson, rutaTxt) => {
  fs.stat(rutaJson, (error, stats) => {
    if (error) throw new Error(`Error en fs.stat: ${error.message}`);
    //else if (stats.isFile()) {
    let datos = fs.readFileSync(rutaJson);
    let info = {
      contenidoStr: datos.toString(),
      contenidoObj: JSON.parse(datos),
      size: stats.size,
    };
    console.log(info)
    fs.writeFileSync(rutaTxt, JSON.stringify(info, null, "\t"));
    //}
  });
};
