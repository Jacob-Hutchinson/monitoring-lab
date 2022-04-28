const express = require('express')
const path = require('path')

const app = express()


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../style.css'))
})


const port = process.env.PORT || 4444

app.listen(port, () => {
    console.log(`this is port ${port}`)
})