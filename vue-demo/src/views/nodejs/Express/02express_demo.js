const express = require("express");
let app = express();

app.get("/",(req,res)=>{
    res.send("get")
})

app.post("/",(req,res)=>{
    res.send("post")
})

app.get("/del_user",(req,res)=>{
    res.send("删除页面")
})

app.get("/list_user", (req,res)=>{
    res.send("用户列表页面")
})

app.get("/ab*cd", (req,res)=>{
    res.send("正则匹配")
})

var server = app.listen(8082,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
