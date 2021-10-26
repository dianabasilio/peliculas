module.exports = function(sequelize, dataTypes){

    //Alias es el apodo de como le dirá sequelize a esta tabla
    let alias = "Pelicula";
    //Las columnas que quiero que lea de la base de datos
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        title:{
            type: dataTypes.STRING
        },
        awards: {
            type: dataTypes.INTEGER
        },
        rating: {
            type: dataTypes.DOUBLE
        },
        length: {
            type: dataTypes.INTEGER
        },
        genre_id: {
            type: dataTypes.INTEGER
        },
        release_date:{
            type: dataTypes.DATE
            
        }
    }
    //config es para decirle cómo se llama la tabla 
    // y si tiene timestamps
    let config = {
        tableName: "movies",
        timestamps: false

    }
    let Pelicula = sequelize.define(alias, cols, config);
    return Pelicula;
}