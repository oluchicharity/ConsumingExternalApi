const mongoose= require("mongoose")

const poemSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    isCompleted:{
        type:Boolean,
        required:true
    }
})
module.exports = mongoose.model("poem",poemSchema)

