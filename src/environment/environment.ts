import dotenv from "dotenv"
dotenv.config()

const PORT          = process.env.PORT
const DB_USER       = process.env.DB_USER
const DB_PASSWORD   = process.env.DB_PASS
const DB_HOST       = process.env.DB_HOST
const DB_PORT       = process.env.DB_PORT
const DB_NAME       = process.env.DB_NAME

export default {
    PORT,
    DB_USER,
    DB_PORT,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME,
}