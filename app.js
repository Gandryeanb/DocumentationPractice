require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/practice01');
const routes = require('./routes')
const db = mongoose.connection


db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log(`> connected to Database`)
})

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/',routes)

app.listen(port, () => {
    console.log(`> listening to port ${port}`);
})