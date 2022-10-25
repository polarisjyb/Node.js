const { read } = require("fs");
const http = require("http");
const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
  res.write('<h1>안녕 노드야</h1>');
  res.end('연습용으로 만든 서버입니다.');
})
  .listen(port, () => {
    console.log('2022년 10월 25일 오전 9시 37분 3000 포트 서버 가동');
  });


