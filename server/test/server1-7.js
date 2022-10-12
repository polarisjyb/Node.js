const http = require('http');
const port = process.env.PORT || 3000;

const app = http.createServer((req, res) => {
  res.writeHead(200, {'Content-type': 'text/html; charset=UTF-8'})
  res.end('안녕 세상아');
});

app.listen(port, () => {
  console.log('3000번 포트로 가동된 서버입니다.')
})