const {odd, even} = require("./var.js");

function checkNumber(num) {
  if (num % 2) {
    return odd;
  }
  return even;
}

module.exports = checkNumber;