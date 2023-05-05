
const express = require("express") ;
const User = require('./user_model') ;
const Loggedin_user = require('./loggedin_model') 
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

let auth =(value)=> { 
 let authorised = "false" ; 
 if(value==="true"){ 
    authorised = "true" ; 
 }
 return(authorised); 
}
app.post('/login' , async(req, res)=>{ 

    let user = await User.findOne(req.body) ; 
     
    if(user.password !=="" && user.email !==""){ 
        res.send(user) ; 
    console.log(user) ;
    auth("true") ; 
    }

})

app.post('/setloggedin' , async(req,res)=> { 
    let loggedinuser = new Loggedin_user(req.body) ; 
    let result = await loggedinuser.save(); 
    res.send(result) ; 
})

app.get('/getcontacts' , async(req, res)=> {
         let contacts = await User.find({}); 
        res.send(contacts) ;
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