const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let html = '<h1>Full Cycle Rocks!</h1>';

    res.send(html)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
