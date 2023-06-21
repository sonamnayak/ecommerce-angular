const express = require('express')
require('dotenv').config()
const apiRoutes = require('./services/apiRoutes/api.routes')
const mongoose = require('mongoose')
var cors = require('cors')

const app = express()
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
const port = process.env.PORT

app.use('/api', apiRoutes)

mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB connection successful")).catch(err => console.log(err))

app.listen(port || 3000, (err) => {
    if(err) console.log(err)
    else console.log(`Server is listening on port http://localhost:${port}`)
})