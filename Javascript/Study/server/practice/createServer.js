const http = require('http');

http.createServer((req, res) => {
  // 여기에 어떻게 응답할지 적습니다.
  console.log('반응!');
  
  while(true);
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>안녕 노드!!</h1>');
  res.end('<p>Hello Server!</p>');
})
  .listen(8080, () => { // 서버 연결
    console.log('8080번 포트에서 서버 대기 중입니다!');
  });