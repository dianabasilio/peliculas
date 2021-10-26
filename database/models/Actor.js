module.exports = function(sequelize, dataTypes){

    //Alias es el apodo de como le dirá sequelize a esta tabla
    let alias = "Actor";
    //Las columnas que quiero que lea de la base de datos
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        first_name:{
            type: dataTypes.STRING
        },
        last_name:{
            type: dataTypes.STRING
        }
    }
    //config es para decirle cómo se llama la tabla 
    // y si tiene timestamps
    let config = {
        tableName: "actors",
        timestamps: false

    }
    let Actor = sequelize.define(alias, cols, config);

    //Ahora hay que definir las associaciones/relaciones
//Un actor tiene muchas pelis
//Una peli tiene muchos actores
//belongs to many es para muchos a muchos
Actor.associate= function(models){
    Actor.belongsToMany(models.Pelicula,{
        as: "peliculas",
        //throught es para decir que tabla relaciona estas 2
        //solo de muchos a muchos
        through: "actor_movie",
        foreignKey: "actor_id",
        otherKey: "movie_id",
        timestamps: false
    });

}
    return Actor;
}