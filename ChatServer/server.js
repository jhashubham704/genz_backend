const express = require("express") ;
const Message = require('./messages_model') ;
require('./dbconfig') ; 


const app = express() ;
var cors = require('cors')
app.use(cors()) ; 

const port = 5002 ; 
app.use(express.json()) ; 

app.post('/sendmessage' , async(req,res)=> { 
    let message = new Message(req.body) ; 
    let result = await message.save(); 
    res.send(result) ; 
    console.log(result)
})

app.post('/readmessges' , async(req,res)=> { 
   let message =  await Message.find(req.body) ; 
   res.send(message); 
   console.log(message) ; 
})

app.listen(port , ()=>{ 
    console.log("Message wali Api badhiya chl rhi hai") 
 }) ; 