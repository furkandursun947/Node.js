// In order to start a http server, we must import http module
var http = require('http');

// fs module is for file systems. With this module, we will log EVERY request that is coming to our port.
var fs = require('fs');

// For logging our error requests, we will create errors.txt.
var errorLog = fs.createWriteStream("logs/errors.txt", 'w');

// For logging our succesful requests, we will create infos.txt
var infoLog = fs.createWriteStream("logs/infos.txt", 'w');

// Here is the properties of server.. Host and port.
const host = 'localhost';
const port = 8080;

// Now, we can create our server. Writehead with content type html says that display as html page.
const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});

    resolveRequest(req,res);  // resolving requests
    res.end();
});

// With listen, we can watch for every request. We have started our server now.
server.listen(port, host, () => {
    console.log(`running on http://${host}:${port}`);
});

/*
In this function, we will resolve requests that is coming from outside, we will send response and print some messages to user. 
@param 1: req => requests that is coming to our server.
@param 2: res => responses that we will send it to user.
*/
const resolveRequest = (req, res) =>{
    switch(req.url){
        case '/':
            res.writeHead(200);         // 200 Status, OK. The request is succeed.
            infoLog.write(`${req.url}\n`);
            res.end("Hello, what are you doing in my index page?!");
            break
        case '/home':
            res.writeHead(200);         // 200 Status, OK. The request is succeed.
            infoLog.write(`${req.url}\n`);
            res.end("Oh, now you came into my home without asking..");
            break
        case '/kitchen':
            res.writeHead(200);         // 200 Status, OK. The request is succeed.
            infoLog.write(`${req.url}\n`);
            res.end("Wow, now you are eating my food huh. YOU BETTER RUN BOY.");
            break
        default:
            res.writeHead(404, {'Content-Type': 'text/html'});         // 404 Status, Not Found
            errorLog.write(`${req.url}\n`);         
            res.end('You seem lost.. IN MY HOUSE!');
            
            break
    }    
}