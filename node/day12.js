const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  outpit: process.stdout,
});

function findTom() {}

let list = ["tom", "john", "lenglet", "tom"];

for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
  for (let j = 0; i < list.length; j++) {
    if (list[i] === list[j]) {
    }
  }
}
