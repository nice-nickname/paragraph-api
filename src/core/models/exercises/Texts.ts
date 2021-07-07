import db from "../db";
import * as Sequelize from "sequelize";
import TextParagraphs from "./TextParagraphs";
import ApiErrors from "../../../utils/Errors/ApiErrors";

export default class Texts extends Sequelize.Model {}

Texts.init({

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    level_id: {
        type: Sequelize.INTEGER
    },

    title: {
        type: Sequelize.STRING(40),
        allowNull: false,
    },

    source: {
        type: Sequelize.STRING(100),
        allowNull: true
    },

    published_at: {
        type: Sequelize.DATE,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: 'texts',
    indexes: [
        {
            fields: ['created_at']
        }
    ],
    updatedAt: false,
    createdAt: 'created_at'
})
