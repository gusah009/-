const fs = require('fs');

fs.readFile('C:\\Users\\minion\\Desktop\\2020-2\\NodeJS\\Javascript\\file\\readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
  console.log(data.toString());
})