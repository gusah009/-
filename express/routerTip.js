// next('route')는 뒤에 있는 미들웨어를 실행시키지 않습니다
router.get('/', function(req, res, next) {
  next('route');
}, function(req, res, next) {
  console.log('실행되지 않습니다');
  next();
}, function(req, res, next) {
  console.log('실행되지 않습니다');
  next();
});
router.get('/', function(req, res) {
  console.log('실행됩니다');
  res.send('Hello, Express');
});

// 정규표현식을 사용 할 수 있습니다.
router.get('/user/:id', function(req, res) {
  console.log(req.params, req.query);
});


// 주소는 같지만 메서드가 다른 코드들은 하나로 줄일 수 있습니다.
router.get('/abc', (req, res) => {
  res.send('GET /abc');
});
router.post('/abc', (req, res) => {
  res.send('POST /abc');
});
// ----------------------------------
router.route('/abc')
  .get((req, res) => {
    res.send('GET /abc');
  })
  .post((req, res) => {
    res.send('POST /abc');
  });