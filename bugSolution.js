const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.end();
    return;
  }

  // Use a stream to handle large requests efficiently
  let body = '';
  req.pipe(res);

  //Alternative solution without pipe. req.on('data', chunk => {
  //   res.write(chunk);
  // });
  // req.on('end', () => {
  //   res.end();
  // });
});

server.listen(3000);