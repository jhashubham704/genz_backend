const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.get('/cards',(req,res)=>{
    res.send("Cards data fetched from Mongodb")
})
app.get('/experts',(req,res)=>{
    res.send("Experts data fetched from Mongodb ")
})


app.listen(5000, () => {
    console.log(`Server Started at ${5000}`)
})