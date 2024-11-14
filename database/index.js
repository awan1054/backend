var mongoose=require("mongoose")
 async function Databaseconnect(){

 await mongoose.connect("mongodb+srv://awankarki1054:awankarki@cluster0.a71vz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
 console.log("database connectedd succesfully")

}
module.exports=Databaseconnect




// mongodb+srv://awankarki1054:awankarki@cluster0.a71vz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0