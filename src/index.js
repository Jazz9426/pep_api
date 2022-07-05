const express = require('express')
require("dotenv").config()
const userRouter=require('./routes/users')
const petRouter=require('./routes/pets')
const app=express()
const bodyparser= require('body-parser')
const cors = require('cors');

app.use(cors());

app.use(bodyparser.json())

app.use(userRouter)

app.use(petRouter)

app.listen(process.env.PORT)

