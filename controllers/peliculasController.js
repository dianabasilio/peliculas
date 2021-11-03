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
    },
    editar: function(req, res){
//Aquí hay 2 pedidos asíncronicos por las peliculas y genero
        let pedidoPelicula=db.Pelicula.findByPk(req.params.id);

        let pedidoGeneros= db.Genero.findAll();

        //REcibe un array con pedidos de peliculas y generos,
        //solo se ejecuta cuando se terminan las 2 promesas
        //los 2 pedidos asincrónicos
        Promise.all([pedidoPelicula,pedidoGeneros])
            .then(function([pelicula, generos]){
                res.render("editarPelicula", {pelicula:pelicula, generos:generos})
            })
    },
    actualizar: function(req,res){
        db.Pelicula.update({
            //Lo que esta en inglés es como están los nombres en la tabla
            //En español es como lo pusimos en el forms
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.fecha_estreno,
            genre_id: req.body.genero,
            length: req.body.duracion ,
            rating: req.body.rating,
        }, {where:{id: req.params.id}
    });
        res.redirect("/peliculas/"+req.params.id);

    }
}

module.exports = peliculasController;