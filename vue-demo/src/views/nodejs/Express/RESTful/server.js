const express = require("express");
const app = express();
const fs = require("fs");

let userObj = {
    "user4": {
        "name": "mohit",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    }
}

let fileName = __dirname + "/" + "user.json";

app.get("/deleteUser/:id", (req, res) => {
    fs.readFile(fileName, "utf8", (err, data) => {
        data = JSON.parse(data);
        let userKey = "user" + req.params.id;
        console.log(userKey);
        delete data[userKey];
        res.send(JSON.stringify(data));
    })
})

app.get("/:id", (req, res) => {
    fs.readFile(__dirname + "/" + "user.json", "utf8", (err, data) => {
        data = JSON.parse(data);
        console.log(req.params);
        let user = data["user" + req.params.id];
        console.log(user);
        res.send(JSON.stringify(user));
    })
})

app.get('/addUser', function (req, res) {
    // 读取已存在的数据
    fs.readFile(__dirname + "/" + "user.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        data["user4"] = userObj["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

app.get("/listUsers", (req, res) => {
    fs.readFile(__dirname + "/" + "user.json", "utf8", (err, data) => {
        console.log(data);
        res.send(data);
    })
})

const server = app.listen(8080, () => {
    let host = server.address().address;
    let port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})