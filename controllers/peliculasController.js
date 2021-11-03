let db = require("../database/models");

let peliculasController = {
    crear: function(req, res) {
        db.Genero.findAll()
            .then(function(generos){
                return res.render("creacionPeliculas",{generos:generos});
            })
    },
    guardado: function(req, res) {
        db.Pelicula.create({
            //Lo que esta en inglés es como están los nombres en la tabla
            //En español es como lo pusimos en el forms
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.fecha_estreno,
            genre_id: req.body.genero,
            length: req.body.duracion ,
            rating: req.body.rating,
        });
        res.redirect("/peliculas");
    },
    listado: function(req, res){
        db.Pelicula.findAll()
        .then(function(peliculas){
            res.render("listadoPeliculas", {peliculas:peliculas})
        })

    },
    detalle: function(req, res){
        db.Pelicula.findByPk(req.params.id,
            {include: [{association: "genero"},{association:"actores"}]
        })
            .then(function(pelicula){
                res.render("detallePelicula", {pelicula:pelicula})
            })
    }
}

module.exports = peliculasController;