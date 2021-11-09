var router = require('express').Router();
const express = require('express')

// express app
const app = express()
const Port = process.env.PORT || 5000

const locations = require('./routes/locations')

//parse form data
app.use(express.urlencoded({extended: true}))
//parse json
app.use(express.json())

//cors
const cors = require('cors')

app.use(cors())
app.use('/api', locations)
app.get('/', (req, res) => {
    res.status(200).send("Home Page")
})
app.listen(Port, () => {
    console.log(`Server listening on port ${Port}`)

})