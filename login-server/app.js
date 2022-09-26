/* app.js는 node module을 로딩하고 초기 initialize해야 하는 변수나 Object를 선언하고 Router에 유입이 이루어 지는 그 유입점의 역할을 하는 JavaScript이다.
  app.js는 Node.js의 유입점이다. Router의 유입점을 정의하고 주요 Router로 바인딩하기 위한 rule을 정의한다. 또한 다양한 환경 변수를 지정하고 Node.js 서비스를 위한 객체의 상태를 설정하는 Management Configuration과 가은 역할을 한다.
*/

/* http 서버 가동 */

// const http = require('http');
// const app = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8'});
//   if (req.url === '/') {
//     res.end('여기는 루트 입니다.');
//   }else if (req.url === './login') {
//     res.end('여기는 로그인 화면입니다.');
//   }
// });

// app.listen(3001, () => {
//   console.log('http로 가동된 서버입니다.');
// })

/* express 서버 가동 */

// 스크립트 상단에 'use strict'를 위치 시키면 strict mode가 활성회가 된다.
// 흔히 발생하는 코딩 실수를 잡아내서 예외를 발생시킨다.
// 상대적으로 안전하지 않은 액션이 발생하는 것을 방지하거나 그럴 때 예외를 발생시켜준다.
// 혼란스럽거나 제대로 고려되지 않은 기능들을 비활성화 시킨다.

'use strict';

// 모듈
const express = require('express');
const app = express();

const PORT = 3000;

// 라우팅
const home = require('./routes/home');

// 앱 세팅
app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', home); // use -> 미들 웨어를 등록해주는 메서드.

app.listen(PORT, function() {
  console.log('로그인 서버 가동');
});