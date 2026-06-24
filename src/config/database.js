import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("movies", "root", "", {
    host: "localhost",
    dialect: "mysql",
})

export const starBD = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({force: false})
        console.log("conexion a la base de datos");
    } catch (error) {
        console.log(Error );
    }
}

