const { default: mongoose } = require("mongoose");

const messageSchema = mongoose.Schema({ 
    chat:String, 
    message:String, 
    time:Number,
    })

    module.exports= mongoose.model("messages",messageSchema); 