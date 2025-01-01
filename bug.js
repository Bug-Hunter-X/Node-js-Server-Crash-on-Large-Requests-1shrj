const http = require('http');

const server = http.createServer((req, res) => {
  // Without this check, the server will crash on large requests
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.end();
    return;
  }

  // This is where a large request can cause a stack overflow
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    res.end(body);
  });
});

server.listen(3000);