const express= require("express");

require("./dbconfig/dbConfig");
const poemRouter=require("./router/poemRouter")

const app= express()

app.use(express.json());

app.get("/api/vi",(req,res)=>{
    res.send("welcome")
})

app.use("/api/vi", poemRouter)



const port= 3030

app.listen(port,()=>{
    console.log(`listening on port: ${port}`)
})