import { Sequelize } from "sequelize";
import environment from "../../environment/environment";

const db = new Sequelize({
    database: environment.DB_NAME,
    username: environment.DB_USER,
    password: environment.DB_PASSWORD,
    host: environment.DB_HOST,
    port: environment.DB_PORT as number | undefined,
    dialect: 'postgres',
    quoteIdentifiers: false
})

db
    .sync({logging: false})
    .then(() => {console.log('Database synchronized...')})
    .catch(err => {console.log(err)})

export default db
