import db from "../db";
import * as Sequelize from "sequelize";
import ExerciseContent from "./ExerciseContent";

export default class Exercises extends Sequelize.Model {}

Exercises.init({

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    level: {
        type: Sequelize.STRING(2),
        allowNull: false,
        validate: {
            is: /^A1|^A2|^C1|^C2|^B1|^B2/gm,
            isLenOkay(value: string) {
                if (value.length !== 2) {
                    throw new Error(`Invalid exercises.level string length. Predicated 2, received ${value.length}`)
                }
            }
        },
    },

    title: {
        type: Sequelize.STRING(25),
        allowNull: false,
    },

    source: {
        type: Sequelize.STRING(100),
        allowNull: true
    },

    content_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

}, {
    sequelize: db,
    tableName: 'exercises',
    indexes: [
        {
            fields: ['level']
        },
        {
            fields: ['created_at']
        }
    ],
    updatedAt: false,
    createdAt: 'created_at'
})
