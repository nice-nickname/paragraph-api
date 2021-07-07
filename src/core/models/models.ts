import Texts from "./exercises/Texts";
import TextParagraphs from "./exercises/TextParagraphs";
import TextLevels from "./exercises/TextLevels";

Texts.hasMany(TextParagraphs, {
    foreignKey: 'text_id'
})

TextLevels.hasOne(Texts, {foreignKey: 'level_id'})

export {
    Texts,
    TextParagraphs,
    TextLevels
}