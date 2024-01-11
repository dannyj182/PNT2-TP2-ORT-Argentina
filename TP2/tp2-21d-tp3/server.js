import express from "express";
import routerLibros from "./router/libros.js";

const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*Rutas*/
app.use("/libros", routerLibros);

/*Servidor Listen*/
const PORT = 8080;
const server = app.listen(PORT, () =>
  console.log(`Servidor express escuchando en el puerto ${PORT}`)
);
server.on("error", (error) =>
  console.log(`Error en servidor: ${error.message}`)
);
