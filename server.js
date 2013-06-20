var http = require('http');
http.createServer(function (req, res) {
  console.log('A new request arrives with HTTP headers ' + JSON.stringify(req.headers));
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Pluralsight\n');
}).listen(process.env.PORT);
console.log('Server running');
