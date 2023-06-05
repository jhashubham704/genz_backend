const { default: mongoose } = require("mongoose");

const chatSchema = mongoose.Schema({ 
    users:[String] , 
    })

    module.exports= mongoose.model("chat",chatSchema); 