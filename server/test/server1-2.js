/*
  res.write와 res.end에 일일이 HTML을 적는 것은 비효율적이므로 미리 HTML 파일을 만들어두는 것이 좋다.
  그 HTML 파일을 fs 모듈로 읽어서 전송할 수 있다.
*/

const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
  try {
    const data = await fs.readFile('./server1.html');
    res.writeHead(200, { 'Content-Type' : 'text/html; chareset=utf-8' });
    res.end(data);
  } catch (err) {
    console.error(err);
    res.writeHead(500, { 'Content-Type' : 'text/plain; charset=utf-8' });
    res.end(ree.message);
  }
})
  .listen(8081, () => {
    console.log('8081번 포트에서 서버 대기 중입니다!');
  });

  /*
    요청이 들어오면 먼저 fs 모듈로 HTML 파일을 읽는다. data 변수에 저장된 버퍼를 그대로 클라이언트에 보내면 된다.
    server1-1 에서는 문자열을 보냈지만, 이렇게 버퍼를 보낼수도 있다.
  */