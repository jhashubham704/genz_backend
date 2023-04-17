const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: Number
    }
     //isAdmin:{
      //  required:true,
      //   type:Boolean
 //}

})

module.exports = mongoose.model('users', dataSchema)