const express=require('express');
const app=express();
const bodyParser= require('body-parser')
const mongoose= require('mongoose')
const cors= require('cors')
require('dotenv').config();
const categoryRoutes= require('./routes/category')
const productRoutes = require('./routes/product')

app.use(cors());
app.options('*',cors())

//middleware
app.use(bodyParser.json())

//Routes


app.use('/api/category', categoryRoutes)
app.use('/api/products', productRoutes)

//Database
const CONNECTION_STRING = process.env.CONNECTION_STRING ? process.env.CONNECTION_STRING.trim() : '';
mongoose.connect(CONNECTION_STRING ,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log('Database Connection is Ready.....')
    //server
    app.listen(process.env.PORT, ()=>{
        console.log(`server is running http://localhost:${process.env.PORT}`)
    })
}).catch((err)=>{
    console.log('error',err)
})