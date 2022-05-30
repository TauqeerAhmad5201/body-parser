const express = require('express')
const app = express()
const port = 3000

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/form.html')
})

app.post('/form', (req, res) => {
    var uname = JSON.stringify(req.body.password)
    console.log(uname)
    res.send('Thanks for submitting'); 
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})