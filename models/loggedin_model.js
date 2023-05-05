const { default: mongoose } = require("mongoose");

const loggedinSchema = mongoose.Schema({ 
    name: String, 
    email:String , 
    })

    module.exports= mongoose.model("loggedin_user",loggedinSchema); 