const express = require('express');

const app = express(); //sevrer create

app.use(express.json()); // middleware to parse JSON bodies

const notes =[

]
//post /notes
app.get('/',(req,res)=>{
    res.send("hello world")
})

app.post('/notes',(req,res)=>{
    console.log(req.body)
    notes.push(req.body)

    console.log(notes)
    res.send("notes created")
})

//get /notes

app.get('/notes',(req,res)=>{
    res.send(notes)
})

//delete / notes
app.delete('/notes/:index', (req, res)=>{
    
    delete notes[req.params.index]

    res.send("notes deleted successfully")
})

//patch / notes

app.patch("/notes/:index",(req,res)=>{

    notes[req.params.index].description = req.body.description

    res.send("notes updated successfully")
})

module.exports =app;