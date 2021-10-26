module.exports = function(sequelize, dataTypes){

    //Alias es el apodo de como le dirá sequelize a esta tabla
    let alias = "Genero";
    //Las columnas que quiero que lea de la base de datos
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        name:{
            type: dataTypes.STRING
        }
    }
    //config es para decirle cómo se llama la tabla 
    // y si tiene timestamps
    let config = {
        tableName: "genres",
        timestamps: false

    }
    let Genero = sequelize.define(alias, cols, config);
    //Ahora hay que definir las associaciones/relaciones
//Un genero tiene muchas peliculas
//hasMany uno a muchos
    Genero.associate= function(models){
        Genero.hasMany(models.Pelicula,{
            as: "peliculas",
            foreignKey: "genre_id"
        });

    }
    
    return Genero;
}