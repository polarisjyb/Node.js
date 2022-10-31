import fs from 'fs';
import path from 'path';
import http from 'http';

const server = http.createServer((req, res) => {
  const main = fs.readFileSync('../publick/static/index.html', (err) => {
    if (err) throw err;
  });

  if (req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(main);

  } else if (req.method === 'POST') {
    
    let body = "";

    req.on('data', (data) => {
      body += data;
      data = data.toString('utf8');
      console.log(data, 'this is first event');
    });

    req.on('end', () => {

      console.log(body, 'this is last event');

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(main);

    });
  }
});
server.listen(5678, () => {
  console.log('server running');
});