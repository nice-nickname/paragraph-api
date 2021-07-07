import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import router from "./src/routes/routes";
import errorHandler from "./src/middlewares/ErrorHandler";
import environment from "./src/environment/environment";
import splitTextToParagraphs from "./src/lib/paragraphs/TextSplitter";

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())

app.use('/api', router)
app.use(errorHandler)

app.listen(environment.PORT, () => {
    console.log('Server started...')
})

let data = splitTextToParagraphs(
    require('./debug/text.json')[0].content,
    {
        maxSymbolsCount: 450,
        paragraphDelimits: ['!', '.', '?'],
        orderStartingFrom: 0
    }
)

data.forEach(v => {
    console.log(v)
    console.log(v.content.length)
})