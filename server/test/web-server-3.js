const http = require('http');
const port = process.env.PORT||5678;

/*
  createServer 메소드의 파라미터인 request(req)와 response(res)를 사용했다.
  처음 처리로 req.on('error', 콜백) 해준 이유는 요청받은 것에 에러가 있을 수 있기 때문에 먼저 처리를 진행했다.
  에러가 생기면 서버가 멈춰버리기 때문에 에러는 반드시 처리해줘야 한다. 처음부터 에러처리하고 들어가는 것도 좋은 방법이다.
  다음은 req.on('data', 콜백) 과 req.on('end', 콜백)인데 각각 req에 data가 있을 경우 처리하는 부분과
  data 처리가 다 끝났음을 알려주는 부분이다. req에 data가 있는 경우는 HTML 폼 전송같이 폼의 내용을 전송하는 경우 데이터가
  req의 data에 실려 서버로 전송된다.
*/

const server = http.createServer((req, res) => {
  return req
  // 클라이언트의 요청에 에러가 있으면
  .on('error', (err) => {
    console.error(err);
  })
  // 요청에 데이터가 있으면
  .on('data', (data) => {
    console.log(data);
  })
  // 요청에 데이터가 모두 받아졌으면
  .on('end', () => {
    // 서버의 응답에 에러가 있을 수 있으니 에러 먼저 처리
    res.on('error', (error) => { // 응답에 에러가 있으면
      console.log(err);
    });
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.write('hi \n');
    res.end('the end !');
  });
});

server.listen(port, () => {
  console.log(`${port} 로 연결`);
});