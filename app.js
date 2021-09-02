const express = require('express')
const mongoose= require('mongoose')
const url= 'mongodb://localhost/FilmDB'

const app = express()

mongoose.connect(url)

const con = mongoose.connection

con.on('open', function(){
    console.log('connected....')
})

app.use(express.json())

const filmRouter = require('./router/films')
app.use('/films',filmRouter)
app.listen(9000,function(){
    console.log('Server started');
})