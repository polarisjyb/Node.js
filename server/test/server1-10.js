const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html; charset=utf-8" });
  res.write('2022년 10월 26일 오전 0시 54분 <br>');
  res.end('2022년 10월 26일 오전 1시 8분 응답을 종료합니다.');
});


app.listen(3000, () => {
  console.log('3000 포트로 가동된 서버입니다.');
});