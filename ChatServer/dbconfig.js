const mongoose = require("mongoose");

const DB = "mongodb+srv://himanshu:123@cluster0.8mf1qpv.mongodb.net/genzdb"

mongoose.connect(DB).then(()=> { 
console.log("connection successful")
}).catch((err)=>{ 
    console.log(err)
}) ; 
