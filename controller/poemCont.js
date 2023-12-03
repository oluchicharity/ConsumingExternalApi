const { escape } = require("querystring")
const poemModel=require("../models/poemModels")

const axios= require("axios")
const externalApi= "https://jsonplaceholder.typicode.com/todos"


const externalApI= async (req,res)=>{
    try {
        const response= await axios.get (externalApi)
        const extractedData= response.data

        for(const externalobject of extractedData){
            const newPoem = new poemModel({
                title:externalobject.title,
                isCompleted:externalobject.completed
            })
            newPoem.save()
        }
        res.status(200).json({
            message:"success",
            data:extractedData
        })
    } catch (error) {
        res.send(error.message)
    }
    
} 




const createPoem = async(req,res)=>{
    try {
        const poem = await poemModel.create(req.body)
        if(!poem){
            res.status(400).json({
                message:"could not create poem"
            })
        }
        res.status(200).json({
            message:"poem created!",
            data:poem
        })
    } catch (error) {
     res.send("server failed")
}
}

//read poem
const readPoem =async(req,res)=>{
    try {
        const poem= await poemModel.find(req.body)
        if(!poem){
            res.status(400).json(`no poem to read`)
        }else{
            res.status(200).json(`Reading poem`)
        }
    } catch (error) {
        res.send(error.message)
    }
}

//get a poem

const aPoem= async(req,res)=>{
    try {
        const poem= await poemModel.findById(req.params.id)
        if(!poem){
            res.status(400).json(`cannot get a poem`)
        }else{
            res.status(200).json(`find a poem here`)
        }
    } catch (error) {
        res.send(error.message)
    }
}

//update poem

const updatePoem= async(req,res)=>{
try {
    const poem= await poemModel.findById(req.params.id)
    const updatepoem= await poemModel.findByIdAndUpdate(poem, {new:true})

    if(!poem){
        escape.status(400).json(`poem updated successfully`)
    }
} catch (error) {
    res.send(error.message)
}
}

// delete poem

const deletePoem= async (req,res)=>{
    try {
        const poem= await poemModel.findById(req.params.id)
        const dltPoem= await poemModel.findByIdAndDelete(poem)
        if(!poem){
            res.status(400).json(`no poem found to delete`)
        }else{
            res.status(200).json(`poem has been deleted successfully`)
        }
    } catch (error) {
        res.send(error.message)
    }
}
module.exports={
    externalApI,
    createPoem,
    readPoem,
    aPoem,
    updatePoem,
    deletePoem
}