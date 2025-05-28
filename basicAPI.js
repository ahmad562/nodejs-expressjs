const http = require("http");
//const { resolve } = require("path");
const empdata = require("./empdata");
//const empdata = require(empdata);

http.createServer((request, response)=>{
    response.writeHead(200, {"Content-Type": "application\json"});
//    response.write(JSON.stringify({"name": "Waqas", "Department": "IT"}));
    response.write(JSON.stringify(empdata));

    response.end();    

}).listen(1000);