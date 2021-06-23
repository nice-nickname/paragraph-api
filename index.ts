import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import router from "./src/routes/routes";
import errorHandler from "./src/middlewares/ErrorHandler";
import environment from "./src/environment/environment";
import db from "./src/models/db";

const app = express()
db.config
// Configuration is below
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
// End of configuration

app.use('/api', router)
app.use(errorHandler)

app.listen(environment.PORT, () => {
    console.log('Server started...')
})