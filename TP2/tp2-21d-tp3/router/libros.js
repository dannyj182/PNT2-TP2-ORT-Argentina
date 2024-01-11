import express from "express";
import controller from "../controller/libros.js";

const router = express.Router();

/* Get Libro/s */
router.get("/:id?", controller.getLibros);

/* Post Libro */
router.post("/", controller.postLibro);

/* Put Libro */
router.put("/:id", controller.putLibro);

/* Delete Libro */
router.delete("/:id", controller.deleteLibro);

export default router;
