const express = require('express');
const mongoose = require('mongoose');
const app = express();
const User = require('./models/user_model') ;
const cardModel = require('./models/card.model');
const textmodel = require('./models/textdata_model')
var cors = require('cors')
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://himanshu:123@cluster0.8mf1qpv.mongodb.net/genzdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.get('/',(req,res)=>{
    res.send("Hello World")
    
})

app.post('/users', async (req, res) => {
  console.log(req.body);
  const user = userModel(req.body)
  user.save()
  res.send(req.body)
})

app.post('/register' , async(req,res)=> { 
  let user = new User(req.body) ; 
  let result = await user.save(); 
  res.send(result) ; 
  console.log(result)
})


app.post('/login' , async(req, res)=>{ 

  let user = await User.findOne(req.body) ; 
   
  if(user.password !=="" && user.email !==""){ 
      res.send(user) ; 
  console.log(user) ;
  }

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
    const data = await User.find({isAdmin:true});
    console.log(data);
    
      res.send(data)
}
catch(error){
    res.status(500).json({message: error.message})
}
})

app.post('/gettextdata' , async(req,res)=> { 
  
  let data = await textmodel.findOne(req.body);
  console.log(data) ; 
  res.send(data); 
})


app.listen(8085, () => {
    console.log(`Server Started at ${8085}`)
})