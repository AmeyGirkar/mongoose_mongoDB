/**
 * Defie a schema of dtudent collection to be storedd in the DB
 * 
 */

const mongoose = require("mongoose")

//Schema

const studentSchema =new mongoose.Schema({
    name: String,
    age: Number
})

//creating collection

module.exports = mongoose.model("Student",studentSchema)