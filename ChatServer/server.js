const express = require("express") ;
const Message = require('./messages_model') ;
const Chat = require('./chat_model')
require('./dbconfig') ; 
const io = require ('socket.io')(5003, {
    cors:{ 
        origin:['http://localhost:3000'],
    }}
    ); 

io.on("connection",  socket => { 
    console.log(socket.id)
    socket.on("join-room",room=> { 
        if(!room){ 
            console.log("no room provided")
        }
        else{ socket.join(room) ; 
     console.log("Joined" +room) ; }
    
    })
;})



const app = express() ;
var cors = require('cors');
const { Socket } = require("socket.io");
app.use(cors()) ; 

const port = 5002 ; 
app.use(express.json()) ; 

app.post('/sendmessage' , async(req,res)=> { 
    let message = new Message(req.body) ; 
    let result = await message.save(); 
    res.send(result) ; 
})

app.post('/readmessages' , async(req,res)=> { 
   let message =  await Message.find(req.body) ; 
   res.send(message); 
    
})

app.post('/startchat', async(req,res)=> { 
    let chat = await Chat.find(req.body); 
    
    if(chat==""){ 
        newchat = new Chat(req.body); 
        result = await newchat.save(); 
        res.send(result ) ;
    }
    else { 
        res.send(chat); 
    }
})

app.listen(port , ()=>{ 
    console.log("Message wali Api badhiya chl rhi hai") 
 }) ; 