require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3500;
const studentDetails = require('./routes/student')
const mongoose = require('mongoose')
const studentModel = require('./models/student')
mongoose.connect(process.env.DB_URL )
const db = mongoose.connection
db.on(`error`,errorMessage =>console.log(errorMessage))
db.once('open',()=>{
    console.log("Connection established")
})
app.get('/',(request,response)=>{
    response.send("Welcome")
})
app.use('/api/v1/studentDetails',studentDetails)
app.listen(3500,()=>{
    console.log(`The server is running in http://localhost:${PORT}/`)
})