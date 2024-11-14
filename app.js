var express= require("express")
const Databaseconnect = require("./database")
const blog = require("./model/blogmodel")
var app=express()
app.use(express.json())
Databaseconnect()
app.get("/",(req,res)=>{
    res.send("hello world")
})
// app.get("/about",(req,res)=>{
//    res.json({
//     message: "hello about"
//    })
// })
// app.get("/contact",(req,res)=>{
//     res.send(" contacts page")
// })
// app.post("/register",(req,res)=>{
//     console.log("post reister wala code trigger vayoo")
//     res.json({
//         message:"post wala"
//     })
// }) 
app.post("/blog", async function(req,res){
   var title=req.body.title
   var subtitle=req.body.title
   var description=req.body.description
//alternative 
//var {title,subtitle,description}=req.body
    
   await blog.create({
    title:title,
    subtitle:subtitle,
    description:description

    })
    res.json({
        message:"blog created sucessfully"
    })

})
app.get("/blog",async function(req,res){
   var blogs=await blog.find()
   res.json({
    data:blogs
   })
})

app.listen(3000,()=>{
    console.log("nodejs server has started at port 3000")
})