const mongoose = require('mongoose')

const filmSchema =  new mongoose.Schema({
    name:{
        type:String,
        requied:true
    },
    image: {
        type: String,
        requied:true
    },
    summary: {
        type: String,
        requied:true

    }
})



module.exports = mongoose.model('Film', filmSchema)