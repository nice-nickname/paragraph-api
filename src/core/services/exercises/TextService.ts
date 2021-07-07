import {TextLevels, TextParagraphs, Texts} from "../../models/models";
import BaseService from "../BaseService";
import ApiErrors from "../../../utils/Errors/ApiErrors";

interface Text {
    id: number,
    title: string,
    TextLevel: Level,
    source: string,
    created_at: Date,
    TextParagraph: Paragraphs[]
}

interface Paragraphs {
    content: string,
    order: number,
}

interface Level {
    level: string
}

export {
    Text,
    Paragraphs
}

export default class TextService implements BaseService<Text> {

    async create(data: any): Promise<boolean> {
        let created = await Texts.create({
            title: data.title,
            source: data.source,
            level_id: data.TextLevel.id
        })

        let id = created.get('id')

        for (let i = 0; i < TextParagraphs.length; i++) {
            await TextParagraphs.create({
                text_id: id,
                content: data.TextParagraph[i].content,
                order: data.TextParagraph[i].order
            })
        }

        return true
    }

    async delete(id: number): Promise<boolean> {
        let num = await Texts.destroy({
            where: {
                id
            }
        })
        return num === 0
    }

    async findAll(): Promise<Text[]> {
        let qres = (await Texts.findAll({
            include: [{
                model: TextParagraphs
            }, {
                model: TextLevels
            }]
        })).map(i => i.toJSON())
        return qres as Text[]
    }

    async findOne(id: number): Promise<Text | undefined> {
        let qres = (await Texts.findOne({
            where: {
                id
            },
            include: [{
                model: TextParagraphs
            }, {
                model: TextLevels
            }]
        }))?.toJSON()
        return qres as Text
    }

    async findQuery(query: any, params: any): Promise<Text[]> {
        if (!query) {
            throw ApiErrors.BadRequest("query is undefined in findQuery()")
        }

        let qres = (await Texts.findOne({
            where: query,
            include: [{
                model: TextParagraphs
            }, {
                model: TextLevels
            }]
        }))?.toJSON()
        return qres as Text[]
    }
}

