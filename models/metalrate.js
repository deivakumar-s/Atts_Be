const mongoose = require("mongoose")

const metalRateschema = new mongoose.Schema({
    metal:{type:String,required:true},
    purity:{type:String,required:true},
    rate:{type:Number,required:true},
    ratedate:{type:Date,required:true}
},{timestamps:true})

module.exports = mongoose.model("metalrate",metalRateschema)