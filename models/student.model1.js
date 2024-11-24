/**
 * Defie a schema of dtudent collection to be storedd in the DB
 * 
 */

const mongoose = require("mongoose")

//Schema

const studentSchema =new mongoose.Schema({
    name: {
        type : String,
        required :true
    },
    age: {
        type : Number,
        min: 19
    },
    email:{
        type:String,
        required:true,
        lowercase : true,
        minLength :15
    },
    subjects : [String],
    createdAt : {
        type:Date,
        immutable :true,
        default: () =>{
            return Date.now()
        }
    }
})

//creating collection

module.exports = mongoose.model("Student",studentSchema)