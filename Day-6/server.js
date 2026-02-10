const app = require('./src/app')

const mongoose = require('mongoose')

function connectToDB(){
    mongoose.connect("mongodb+srv://rajkumar:R02%40rajkumar@cluster0.ictnnb0.mongodb.net/Day-6")
    .then(()=>{
        console.log('Connected to DB')
    })
}

connectToDB()

app.listen(3000, ()=>{
    console.log('server is running on port 3000')
})