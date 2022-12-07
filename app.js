const express = require('express')
const mongoose = require('mongoose')

const url = "mongodb+srv://keet:keet@test.w7mli5h.mongodb.net/test"

const app = express()


mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', function() {
    console.log("connected ")
})

app.set('view engine', 'ejs')
app.use(express.json()) // declaring to the express FM that we use json format

const adminrouter = require('./admin')
const admindelrouter = require('./admindel')

app.use('/', adminrouter)
app.use('/admindel', admindelrouter)

app.listen(1000, function() {
    console.log("server started")
})