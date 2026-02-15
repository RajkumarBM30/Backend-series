const mongoose =require('mongoose')

function connectToDB(){
    mongoose.connect(process.env.MONGOSE_URL)
    .then(()=>{
        console.log("Connected to DB")
    })

}

module.exports = connectToDB