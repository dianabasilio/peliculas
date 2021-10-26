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
    return Actor;
}