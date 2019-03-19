var options = {
hostname: '/helloworld', 
port: 3000
};


var http = require("http");

http.createServer(function(options,res){
   res.writeHead(200,{"Content-type":"text/blain"});
   res.write("HelloWorld");
   res.end();
}).listen(3000);