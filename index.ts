import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import router from "./src/routes/routes";
import errorHandler from "./src/middlewares/ErrorHandler";
import environment from "./src/environment/environment";
import ExerciseService from "./src/core/services/exercises/ExerciseService";
import {ExerciseContent, Exercises} from "./src/core/models/models";

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