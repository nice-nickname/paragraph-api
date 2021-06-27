import db from "../db";
import * as Sequelize from "sequelize";
import {Exercises} from "../models";

export default class ExerciseContent extends Sequelize.Model {}

ExerciseContent.init({

    exercise_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Exercises
        },
        allowNull: false,
        onDelete: 'CASCADE'
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
