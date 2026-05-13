const express = require ('express');
const app = express();

app.post('/notes',(req,res)=>{
    res.send("Note created successfully")
})


 app.listen(3000,()=>{
   console.log("Server is running on port 3000");
 })