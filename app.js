// importation de module
const express = require('express')
const app = express()
const env = require('dotenv')
const db = require('./models/db')
const routeTask = require('./routes/task')
const bodyParser = require('body-parser')

// midelhware

app.use(bodyParser.urlencoded({extended : true}))

app.use('/myTask', routeTask)

const PORT = 2024 || process.env.PORT
app.listen(PORT, ()=> console.log("serveur demarer au port : http://localhost:2024"))