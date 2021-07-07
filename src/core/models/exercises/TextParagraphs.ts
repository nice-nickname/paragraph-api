import db from "../db";
import * as Sequelize from "sequelize";
import {Texts} from "../models";

export default class TextParagraphs extends Sequelize.Model {}

TextParagraphs.init({

    text_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Texts
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
    tableName: 'texts_paragraphs',
    timestamps: false
})
