var express = require('express');
var router = express.Router();

//requerir el controlador de peliculas
var peliculasController = require("../controllers/peliculasController")

//CREACION

//primero por get para ver el formulario que permitirá la creación
router.get("/crear", peliculasController.crear);

//Cuando ya se haya guardado el metodo.
router.post("/crear", peliculasController.guardado);

//LECTURA
router.get("/", peliculasController.listado);

//DETALLE
router.get("/:id", peliculasController.detalle);
module.exports = router;