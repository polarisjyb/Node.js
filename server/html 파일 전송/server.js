/*
  fs와 url 모듈을 추가했다. fs 모듈은 파일을 읽고 쓰는 모듈이다.
  reaeFile 메소드로 HTML 파일을 읽어서 읽은 데이터를 브라우저로 보내고 있다.
  url 모듈은 주소를 분석하는 모듈이다. 이 모듈을 사용해서 url에 따라 다른 HTML을 전송하는 라우팅을 구현하고 있다.
*/
/*  
  readFile()
  fs.readFile(filename, encoding, callback) 메서드는 파일을 읽는 데 사용되는 내장 메서드이다. 이 메서드는 전체 파일을 버퍼로 읽는다.
  filename: 읽을 파일의 이름이나 다른 위치에 저장된 경우 전체 경로
  encoding: 파일의 인코딩을 보유합니다. 기본값은 'utf8'이다.
  callback: 파일을 읽은 후 호출되는 콜백 함수이다.
    - 보통 err와 data 파라미터가 들어가는데 err은 익명함수로 오류 발생시 동작하며 data 파라미터는 읽은 파일 데이터를 담아준다.
*/

const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((request, response) => {
  const pageOne = () => {
    // response.writeHead 메서드로 응답할 파일 형식과 charset 을 정해주었는데
    // response.end 에서도 utf-8 처리를 해줘야 하는지 궁금증이 생긴다.
    response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
      fs.readFile(__dirname + '/index.html', (err, data) => {
        if (err) throw err;
        response.end(data, 'utf-8');
        console.log('여기는 루트 url 입니다.');
      });
  };

  const pageTwo = () => {
    response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
      fs.readFile(__dirname + '/test.html', (err, data) => {
        if (err) throw err;
        response.end(data, 'utf-8');
        console.log('여기는 test url 입니다.');
      })
  };

  const pageError = () => {
    response.statusCode = 404;
    response.end('주소가 없습니다.');
  }

  // 브라우저는 특별한 사항이 없으면 기본으로 GET 요청을 한다.
  // 그렇기 때문에 if 조건문에 요청 메서드가 GET 이라는 조건을 전제할 수 있다.
  if(request.method === 'GET') {
    if(request.url === '/') {
      pageOne();
    } else if(request.url === '/test.html') {
      pageTwo();
    } else {
      pageError();
    }
  }
});

server.listen(5678, (err) => {
  console.log('5678 포트');
  if (err) throw err;
});