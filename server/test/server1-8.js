const http = require('http');
const port = process.env.PORT || 3000;

const app = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html; chareset=utf-8"});
  if(req.url === '/') {
    res.end('여기는 루트 입니다.');
  } else if(req.url === '/login') {
    res.end('여기는 로그인 페이지 입니다.');
  }
});

app.listen(port, () => {
  console.log('3000번대로 가동된 서버 입니다. 테스트입니다.')
});


