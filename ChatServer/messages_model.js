const { default: mongoose } = require("mongoose");

const messageSchema = mongoose.Schema({ 
    from: String, 
    to:String , 
    message:String, 
    time:Number,
    })

    module.exports= mongoose.model("messages",messageSchema); 