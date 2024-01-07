require('dotenv').config();
const express=require('express');
const app=express();
//to connect db
const mysql=require('mysql2');
const cors=require('cors');
require('./db/conn');
const router=require('./Routes/Router');


const port=8001

// app.get('/',(req,res)=>
// {
//     res.send('server start');
// });

//midleware

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port,()=>
{
    console.log('server start at port no'+port);
});