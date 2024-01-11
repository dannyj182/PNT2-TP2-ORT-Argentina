import * as ms from "../scripts/ms.js";
import * as mac from "../scripts/mac.js";
import * as maptc from "../scripts/maptc.js";
import * as mapaa from "../scripts/mapaa.js";

let rutaJson = "./package.json";
//let rutaTxt = "./info.txt";

//Se crearon 4 archivos formato txt para probar los 4 scripts

try {
  ms.crearArchivoTxtDesdeArchivoJson(rutaJson, "./info1.txt");
} catch (error) {
  console.log(error.message);
}

try {
  mac.crearArchivoTxtDesdeArchivoJson(rutaJson, "./info2.txt");
} catch (error) {
  console.log(error.message);
}

maptc
  .crearArchivoTxtDesdeArchivoJson(rutaJson, "./info3.txt")
  .then((info) => console.log(info))
  .catch((error) => console.log(error));

mapaa.crearArchivoTxtDesdeArchivoJson(rutaJson, "./info4.txt");
