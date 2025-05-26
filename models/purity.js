const mongoose = require("mongoose");
const puritySchema = new mongoose.Schema({
    metal:{type:String,required:true},
    purityName:{type:String,required:true},
    description:String,
})
module.exports = mongoose.model("purity",puritySchema)