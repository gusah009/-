console.log("START");

const condition = true;
const promise = new Promise((resolve, reject) => {
  if (condition) {
    for (var i = 0; i < 1000000000; i++) {
    }
    resolve('성공');
  } else {
    reject('실패!');
  }
});


promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error)
  })
  
console.log("END");