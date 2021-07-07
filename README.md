# paragraph-api
To start the project, clone this repository, after that, application needs to include enviroment file (.env) in application root directory with this variables:
- PORT
- DB_NAME
- DB_HOST
- DB_PORT
- DB_USER
- DB_PASS

...

## Start command: npm run start

## Build command: npm run build

______________________________

# ROUTES DESCRIPTION
Texts
- GET /api/exercises - Выдать все упражнения в формате JSON
- GET /api/exercises/:id - Выбать по ID
- GET /api/exercises/:level - Выдать по уровню (A1..C2)
- POST /api/exercises - Создать упражнение в БД, передавать через body
- DELETE /api/exercises - Удалить по ID
