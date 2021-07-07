import db from "../db";
import * as Sequelize from "sequelize";
import ApiErrors from "../../../utils/Errors/ApiErrors";

export default class TextLevels extends Sequelize.Model {}

TextLevels.init({
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
                    throw ApiErrors.BadRequest(
                        `Invalid exercises.level string length. Predicated 2, received ${value.length}`
                    )
                }
            }
        },
    }
}, {
    sequelize: db,
    timestamps: false,
    tableName: 'texts_levels'
})
