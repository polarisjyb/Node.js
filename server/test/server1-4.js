const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  if(req.url === '/') {
    res.end('여기는 루트입니다.');
  }else if(req.url === '/contact') {
    res.end('여기는 컨택트 페이지 입니다.');
  }
})

app.listen(8080, () => {
  console.log('8080 포트로 가동된 서버입니다.')
})