const mongoose= require("mongoose");

const dbhost= "localhost:27017"

const dbname= "poemDb"

mongoose.connect(`mongodb://${dbhost}/${dbname}`).then(()=>{
    console.log("connected to mongoDB successfully")
})
.catch((error)=>{
console.log("failed to connect :"+ error.message)
});
