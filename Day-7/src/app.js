const express = require('express')

const noteModel = require('./models/notes.model')

const app = express()
app.use(express.json())

//post request to create a note`

app.post("/notes",async(req,res)=>{
    const {title, description} = req.body
   
    const note = await noteModel.create({
        title,description
    })
    res.status(201).json({
        message : "note created successfully",
        note
    })
})

//get request to fetch all notes

app.get('/notes',async(req,res)=>{
    const note = await noteModel.find()

    res.status(200).json({
        message : "notes fetched successfully",
        note
    })
})

module.exports = app