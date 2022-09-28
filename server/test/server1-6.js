const http = require('http');
const port = process.env.PORT || 3000;

const app = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
  res.end('연습용 서버입니다.');
});

app.listen(port, () => {
  console.log('3000번 포트로 가동된 서버입니다.');
});