const express = require("express")
const cors = require("cors")
const {seed} = require('./controller/seed.js')
require('dotenv').config()
const { getUserInfo, updateUserInfo} = require('./controller/controller.js')

const app = express

const { PORT } = process.env


app.use(express.json())
app.use(cors())

//Dev
app.post('/seed', seed)


//user
app.get('/user', getUserInfo)
app.put('/user', updateUserInfo)

//


app.listen(PORT, () => {
    console.log('listening on port: ', PORT)
})