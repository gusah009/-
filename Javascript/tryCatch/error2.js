const fs = require('fs');

setInterval(() => {
  fs.unlink('./abadcd.js', (err) => {
    if (err) {
      console.error(err);
    }
  });
}, 1000)