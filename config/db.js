const mongoose = require("mongoose");



const connectDB = async()=>{
    try{

        await mongoose.connect('mongodb://localhost:27017')
        console.log("Connected to the Database");
        
    }catch(error){
        console.log("error connecting to the database",error);
        process.exit(1);
        
    }
}
module.exports = connectDB;