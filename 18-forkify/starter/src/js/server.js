// 1. http is a module in nodejs
const http = require('http');
const port = 9090; // this is the port where we want server to start

// callback function givein to http server.
const listenerCB = function (req, res) {
  console.log('New request recevied.', req);
  res.writeHead(200);

  res.end(`{
        "name": "parul",
        "probability": 0.99,
        "count": 9999
    }`);
};

// 2. creating a http server which uses a callback function.
// This calback function will receive request and response objects.
const server = http.createServer(listenerCB);

// 3. Tell server to start listening at the port
server.listen(port);
console.log('server listening at: ' + port);
