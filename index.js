const mongoose = require('mongoose')
const studentModel = require("./models/student.model1")

mongoose.connect("mongodb+srv://<username>:<password>@cluster0.p8trw.mongodb.net/new____B")

const db = mongoose.connection

db.on("error",()=> console.log("not connected"))

db.once("open",()=> {
    console.log("connected to mongoDB")
    //logic to inseert data into the DB
    //init()
    //Running Queries on DB
    dbQueries()

})

async function init(){
            //logic to insert data
    const student = {
            name: "Amey",
            age : 24,
            email: "abcfjhkf@gmail.com",
            subjects: ["MongoDb","Express","React","NodeJS"]


    }
    const studentobj = await studentModel.create(student)
    console.log(studentobj)
}

async function dbQueries(){
    //Read Student Data
    try {
        const student1 =await studentModel.findById("673ee07dc8b3d2030741ccd1");
        console.log(student1)
    } catch (error) {
        console.log(error)
    }
    //
    try {
        const student2 =(await studentModel.find({name:"Amey"},{name:1,age:1,_id:0}));
        console.log(student2)
    } catch (error) {
        console.log(error)
    }
}
