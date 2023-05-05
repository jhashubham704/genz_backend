const { default: mongoose } = require("mongoose");

const textdataSchema = mongoose.Schema({ 
    Title: String, 
    Discription :String
    })

    module.exports= mongoose.model("textdata",textdataSchema); 