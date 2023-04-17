
const express = require("express") ;
const User = require('./user_model') ;
const authenticate = require('./authetication')
const app = express() ;
var cors = require('cors')
app.use(cors()) ; 

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
    if(user.password !=="" && user.email !==""){ 
        authenticate.authentication('true'); 
    }
})

app.get('/getcontacts' , async(req, res)=> {
    let contacts = await User.find({}); 
    if(authenticate.authentication()==='true'){ 
        res.send(contacts) ;
        console.log(contacts)}
        else { 
            res.send("please authenticte first")
        }
   
 })

 app.get('/cards', async (req, res) => {
    try{
        const data = await cardModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
  })
  app.get('/experts',async(req,res)=>{
    try{
      const data = await userModel.find({isAdmin:true});
      console.log(data);
      
        res.send(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
  })
  

app.listen(port , ()=>{ 
   console.log("Api in progess") 
}) ; 