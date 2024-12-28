const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const router = require("./routes/aiRoutes")

const app = express()


//middleware

app.use(express.json())
app.use(cors())
app.use("/product",router)


mongoose.connect("mongodb+srv://sameeruranw81:bH3MgdwutbLuoT7e@cluster0.mdoa8.mongodb.net/aiSolution?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("connected to database"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=> console.log(err))
