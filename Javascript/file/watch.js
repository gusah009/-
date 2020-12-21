const fs = require('fs');

// 책에는 rename되면 watch가 안된다고 되어있지만 잘만 watch하고있다...


fs.watch('./target.txt', (eventType, filename) =>{
  console.log(eventType, filename);
});