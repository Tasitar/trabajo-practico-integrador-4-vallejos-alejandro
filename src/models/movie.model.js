import { DataTypes } from "sequelize";
import Sequelize, { sequelize } from "../config/database.js";

export const Movie = sequelize.define("Movie", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    synopsis: {
        type: DataTypes.TEXT,
        allowNull: true
    }

}
)