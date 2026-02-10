const express = require('express')
const noteModel = require('./models/notes.model')

const app = express()

app.use(express.json())

//post/api/notes
//create a note and save it to mongodb
app.post('/api/notes', async (req, res)=> {
    const {title, description} = req.body

    const note = await noteModel.create({
        title, description
    })
    res.status(201).json({
        message:"note created successfully",
        note
    })
})

// get/api/notes
//fetch all the notes form mongodb and send it to frontend
app.get('/api/notes', async (req,res)=>{
    const note = await noteModel.find()

    res.status(200).json({
        message:"notes fetched successfully",
        note
    })
})
//Delete/api/notes/:id
//delete a note from mongodb by id
app.delete('/api/notes/:id', async (req,res)=>{
    const {id} = req.params

    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message:"note deleted successfully",
        
    })

})

//Patch/api/notes/:id
//update a note from mongodb by id
app.patch("/api/notes/:id", async (req,res)=>{
    const id = req.params.id
    const {title, description} = req.body

    await noteModel.findByIdAndUpdate(id, {description})

    res.status(200).json({
        message:"note updated successfully",

    })
})
    



module.exports= app