import db from "../db";
import * as Sequelize from "sequelize";

export default class ExerciseContent extends Sequelize.Model {}

ExerciseContent.init({

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    content: {
        type: Sequelize.STRING(500),
        allowNull: false
    },

    order: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

}, {
    sequelize: db,
    tableName: 'exercise_content',
    timestamps: false
})
