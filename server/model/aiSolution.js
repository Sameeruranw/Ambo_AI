const mongoose = require ("mongoose")

const Schema = mongoose.Schema;

const aiSchema = new Schema({
    name:{
        type:String,
        
    },
    email:{
        type:String,
        
    },
    phoneNumber:{
        type:String,
        
    },
    country:{
        type:String,
    },
    companyName:{
        type:String
    },
    jobTitle:{
        type:String,
        
    },
    jobDetails:{
        type:String,
        
    },

})
module.exports = mongoose.model("aiSolution", aiSchema);