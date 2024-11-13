var express= require("express")
var app=express()

app.get("/",(req,res)=>{
    res.send("hello world")
})
app.get("/about",(req,res)=>{
   res.json({
    message: "hello about"
   })
})
app.get("/contact",(req,res)=>{
    res.send(" contacts page")
})
app.post("/register",(req,res)=>{
    console.log("post reister wala code trigger vayoo")
    res.json({
        message:"post wala"
    })
})

app.listen(3000,()=>{
    console.log("nodejs server has started at port 3000")
})