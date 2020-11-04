const http = require("http");

let options = {
    host: "localhost",
    port: "8080",
    path: "/index.html"
};

let callback = function (response) {
    let body = "";
    response.on("data", (data) => {
        body += data;
    })

    response.on("end", () => {
        console.log(body)
    })
}

let req = http.request(options, callback);

req.end();

