/*
  서버는 클라이언트가 있기에 동작한다. 클라이언트에서 서버로 요청(request)을 보내고,
  서버에서는 요청의 내용을 읽고 처리한 뒤 클라이언트에 응답(response)을 보낸다.

  따라서 서버에는 요청을 받는 부분과 응답을 보내는 부분이 있어야 한다. 요청과 응답은 이벤트 방식이라고 생각하면 된다.
  클라이언트로부터 요청이 왔을 때 어떤 작업을 수행할지 이벤트 리스너를 미리 등록해두어야 한다.
*/

/*
  현재 서버에서는 임의의 포트 번호 8080에 노드 서버(프로세스)를 연결했다.
  따라서 http://localhost:8080으로 접근해야한다.
  하지만 80번 포트를 사용하는 주소는 포트를 생략할 수 있다.

  ex) http://test.co.kr 은 80번 포트를 사용하기 때문에 주소에서 포트를 생략할 수 있다.
      http://test.co.kr:80 으로 요청해도 동일한 사이트에 접속된다.
*/

const http = require('http');

http.createServer((req, res) => {
  // 여기에 어떤 응답을 할지 적는다.
  res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });
  res.write( '<h1>Hello Node!</h1>' );
  res.end( '<p>Hello Server!</p>' );
})
  .listen(8080, () => { //서버 연결
    console.log( '8080 포트에서 서버 대기 중입니다!');
  });

/*
  createServer 메서드 뒤에 listen 메서드를 붙이고 클라이언트에 공개할 포트 번호와 포트 연결 완료후 실행될 콜백 함수를 넣는다.

  res 객체에는 res.writeHead와 res.write, res.end 메서드가 있다.

  res.writeHead는 응답에 대한 정보를 기록하는 메서드이다.

  첫 번재 인수로 성공적인 요청임을 의미하는 200을, 두 번째 인수로 응답에 대한 정보를 보내는데 콘텐츠의 형식이 HTML임을 알리고 있다.
  또하나 한글 표시를 위해 charset을 utf-8로 지정했다.
  
  이 정보가 기록되는 부분을 헤더(Header)라고 부른다.

  res.write 메서드의 첫 번째 인수는 클라이언트로 보낼 데이터다. 지금은 HTML 모양의 문자열을 보냈지만 버퍼를 보낼 수도 있다.
  또한 여러 번 호출해서 데이터를 여러 개 보내도 된다. 데이터가 기록되는 부분을 본문(body)라고 부른다.

  res.end 는 응답을 종료하는 메서드이다. 만약 인수가 있다면 그 데이터도 클라이언트로 보내고 응답을 종료한다.
  
  따라서 위의 테스트 예제는 res.write에서 <h1>Hello Node!</h1> 문자열을, res.end에서 <p>Hello Server!</p> 문자열을 클라이언트를 보낸후 응답이 종료됐다.
  브라우저는 응답 내용을 받아서 렌더링한다.
*/


/*
  listen 메서드에 콜백 함수를 넣는 대신, 다음과 같이 서버에 listening 이벤트 리스너를 붙여도 된다.
*/

// const http = require('http');

// const server = http.createServer((req, res) => {
//   // 여기에 어떤 응답을 할지 적는다.
//   res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });
//   res.write( '<h1>Hello Node!</h1>' );
//   res.end( '<p>Hello Server!</p>' );
// })

// server.listen(8080);

// server.on('listening', () => {
//   console.log('8080번 포트에서 서버 대기 중입니다.');
// })
// server.on('error', (error) => {
//   console.error(error);
// })