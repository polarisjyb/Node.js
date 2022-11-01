const http = require('http');
const port = process.env.PORT||5678;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
  if(req.url === '/') {
    res.end('여기는 루트');
  } else if (req.url === '/login') {
    res.end('여기는 업데이트');
  }
});

server.listen(port, ()=> {
  console.log('5678 서버');
});