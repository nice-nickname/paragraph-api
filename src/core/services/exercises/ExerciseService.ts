import {ExerciseContent, Exercises} from "../../models/models";

interface Exercise {

    id: number,
    title: string,
    level: string,
    source: string,
    created_at: Date,
    ExerciseContent: Content[]
}

interface Content {
    content: string,
    order: number
}

export default class ExerciseService {

    async getAll(): Promise<Exercise[]> {
        let qres = await Exercises.findAll({
            include: [{
                model: ExerciseContent
            }]
        })
        let data = await qres.map(i => i.toJSON()) as Exercise[]
        return data
    }

    async parseFile(file: string) {
        let obj = require(file)

        for (let i = 0; i < obj.length; i++) {
            let title = obj[i].title
            let source = obj[i].source
            let level = obj[i].level
            let content = obj[i].content

            let created = await Exercises.create({
                title,
                source,
                level,
                content
            })
            let id = created.get('id')

            for (let j = 0; j < content.length; j++) {

                let paragraph = content[j].paragraph
                let order = content[j].idParagraph

                await ExerciseContent.create({
                    content: paragraph,
                    order,
                    exercise_id: id
                })
            }

        }
    }

}

