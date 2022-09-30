const http = require('http');
const port = process.env.PORT || 3000;

const app = http.createServer((req, res ) => {
  res.writeHead(200, { "Content-Type": "Text/html; charset=utf-8" });
  res.end('서버는 가동 됩니다.');
})

app.listen(port, () => {
  console.log('서버는 가동 됩니다.');
});