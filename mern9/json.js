const express = require('express');
const app = express();
  
// Sample JSON data
var data = {
    portal : "GeeksforGeeks",
    knowledge : "unlimited",
    location : "Noida"  
}
  
app.get('/' , (req,res)=>{
   // This will send the JSON data to the client.
    res.json(data); 
})
  
// Server setup
app.listen(4000 , ()=>{
    console.log("server running");
});