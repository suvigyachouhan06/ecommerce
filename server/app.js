const express=require('express');
const app=express();
const bodyParser= require('body-parser')
const mongoose= require('mongoose')
const cors= require('cors')
require('dotenv/config')


app.use(cors());
app.options('*',cors())

//middleware
app.use(bodyParser.json())

//server
app.listen(process.env.PORT, ()=>{
    console.log(`server is running http://localhost:${process.env.PORT}`)
})