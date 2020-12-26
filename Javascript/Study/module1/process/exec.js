const exec = require('child_process').exec;
var iconv = require('iconv-lite');

var process = exec('dir');

process.stdout.on('data', function(data) {
  // console.log(data);
  iconv.extendNodeEncodings();
  console.log(data.toString('UTF-8'));

  // console.log(iconv.convert(data).toString());
});

process.stderr.on('data', function(data) {
  console.error(data.toString());
});