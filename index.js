import express from 'express'
import mysql from 'mysql2/promise'

const app = express()
const port = 3000

const mysqlConfig = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'app_db'
};

async function addPerson(connection, name) {
    const sql = `INSERT INTO people(name) VALUES(?)`;
    await connection.execute(sql, [name]);
}

app.get('/', async (req, res) => {
    let connection
    let html = '<h1>Full Cycle Rocks!</h1>'

    try {

        connection = await mysql.createConnection(mysqlConfig)
        await addPerson(connection, `Person ${Math.floor(Math.random() * 1000)}`)

    } catch (error) {
        console.log(error)

        return res.status(500).send("Erro ao processar requisição.")
    } finally {
        if (connection) {
            await connection.end()
        }
    }

    res.send(html)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
