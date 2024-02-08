const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const patientRoute=require("./controllers/patientRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://krishna:krishna17@cluster0.yiellsj.mongodb.net/patientDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)
app.use("/api/patient",patientRoute)
app.listen(3000,()=>{
    console.log("server running")
})