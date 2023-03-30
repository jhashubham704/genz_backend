const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cardModel = require('./models/card.model');
const expertModel = require('./models/expert.model');
var cors = require('cors')
app.use(cors())

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
    const data = await expertModel.find({isAdmin:true});
    console.log(data);
    
      res.send(data)
}
catch(error){
    res.status(500).json({message: error.message})
}
})


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})