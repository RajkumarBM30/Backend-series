const express = require('express')
const noteModel = require('./models/notes.model')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('./public'))

// Create a new note
app.post('/notes', async (req, res)=>{
    const {title, description} = req.body

    const note = await noteModel.create({
        title, description
    })
    res.status(201).json({
        Message: "Note created successfully",
        note
    })
})

//get all notes 
app.get('/notes', async (req, res)=>{
    const note = await noteModel.find()

    res.status(200).json({
        message: "all notes retrieved successfully",
        note
    })

})

//delete a notes
app.delete('/notes/:id', async (req, res)=>{
    const {id} = req.params

    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message: "Note deleted successfully"
    })
})

//update a note
app.patch('/notes/:id', async (req, res)=>{
    const id = req.params.id
    const {title,description} = req.body

    const note = await noteModel.findByIdAndUpdate(id,{description})

    res.status(200).json({
        message: "Note updated successfully",
        note
    })
})
 
console.log(__dirname)

app.use("*name", (req,res)=>{
    res.sendFile(path.join(__dirname,"..", '/public/index.html'))
})

module.exports = app