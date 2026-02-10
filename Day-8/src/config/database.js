
const mongoose = require('mongoose')

function  connectToDB(){
mongoose.connect(process.env.MONGOS_URL)
    .then(()=>{
        console.log('Connected to MongoDB')
    })
}

module.exports = connectToDB