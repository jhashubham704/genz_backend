
const express = require("express") ;
const User = require('./user_model') ;
const app = express() ;
var cors = require('cors')
app.use(cors())

require ('./user_model') ;
require ('../config/db.config');

const port = 5001  
app.use(express.json()) ; 
 
app.post('/register' , async(req,res)=> { 
    let user = new User(req.body) ; 
    let result = await user.save(); 
    res.send(result) ; 
    console.log(result)
})

app.post('/login' , async(req, res)=>{ 

    let user = await User.findOne(req.body) ; 
    res.send(user) ; 
    console.log(user) ; 
})

app.listen(port , ()=>{ 
   console.log("Api in progess") 
}) ; 