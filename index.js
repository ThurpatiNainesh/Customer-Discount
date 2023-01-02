const express = require('express')
const route = require('./routes/route')
const mongoose = require('mongoose')
                 require("dotenv").config()


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
})
    .then( () => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
}); 