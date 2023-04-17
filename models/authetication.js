const express = require("express") ;
const app = express() ;
var cors = require('cors')
app.use(cors()) ; 

let authenticated = 'false' ; 

const authentication=(value)=> { 
 authenticated = value ; 
 return(authenticated)
}

module.exports = {authentication, authenticated} ; 

