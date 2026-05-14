const express=require('express');
const app=express();
app.use(express.json());

const notes=[];
//getting response from client
app.get("/notes",(req,res)=>{
    res.send(notes);
})
//creating a note
app.post("/notes",(req,res)=>{
notes.push(req.body)
res.send("Note created successfully")
})
//deleting a note
app.delete("/notes/:index",(req,res)=>{
    console.log(req.params.index);
    res.send("Note deleted successfully");
});
//updating a note
app.patch("/notes/:index",(req,res)=>{
    notes[req.paramsms.index].description=req.body.description;
    res.send("Note updated successfully");
})
module.exports = app;