const crypto = require('crypto');

const pass = 'pass';
const salt = 'salt';
const start = Date.now();

// 기본적인 스레드풀 개수는 4개.
// 따라서 1~4 5~8 단위로 묶인다.
// 스레드풀을 직접 컨트롤은 못해도 개수는 조절할 수 있다.
// -----------------------------------------------------
// 윈도라면 명령 프롬프트에 SET UV_THREADPOOL_SIZE=1을,
// 맥과 리눅스라면 터미널에 UV_THREADPOOL_SIZE=1을 입력한 후
// 다시 node threadpool 명령어를 입력해보세요.

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('1:', Date.now() - start);
})

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('2:', Date.now() - start);
})

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('3:', Date.now() - start);
})

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('4:', Date.now() - start);
})

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('5:', Date.now() - start);
})

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('6:', Date.now() - start);
})

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('7:', Date.now() - start);
})

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('8:', Date.now() - start);
})
