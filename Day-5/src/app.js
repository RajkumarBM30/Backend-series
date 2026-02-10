const express = require('express')

const app = express()

app.use(express.json())

const notes = []

app.get('/',(req,res)=>{
    res.send('hello world')
})

//post
app.post('/notes', (req, res)=>{

    notes.push(req.body)

    res.status(201).json({
        message: "note created successfully"
    })
})

//get
app.get('/notes',(req,res)=>{
    res.status(200).json({
        notes : notes 
    })
})

//delete
app.delete('/notes/:index',(req,res)=>{
    delete notes[req.params.index]

    res.status(204).json({
        message: "note deleted successfully"
    })
})
//patch
app.patch('/notes/:index',(req,res)=>{
    notes[req.params.index].description = req.body.description
   
    res.status(200).json({
        message: "note updated successfully"
    })
})


module.exports = app