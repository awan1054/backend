var mongoose=require("mongoose")

var schema=mongoose.Schema
var blogschema=new schema({
    title:{
        type: String 
    },
    subtitle:{
        type: String
    },
    description:{
        type: String
    }
   
})

var blog=mongoose.model("blog",blogschema)
module.exports=blog