const mongoose = require('mongoose')

//Mongoose vegetable Schema (Blueprint)
const vegetableSchema = new mongoose.Schema({
    name: {type: String, required: true},
    color:{type:String, required: true},
    readyToEat: Boolean
})

const Vegetable = mongoose.model('Vegetable', vegetableSchema)
module.exports= Vegetable