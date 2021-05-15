const readline = require("readline");
var fs = require("fs");
const parse = require("csv-parse/lib/sync");

const rl = readline.createInterface({
  input: process.stdin,
  outpit: process.stdout,
});

function compareNumbers(a, b) {
  return a - b;
}
const csv = fs.readFileSync("./lotto.csv");
const records = parse(csv.toString("utf-8"));
let toparse = records.map((el) => el.map((el) => parseInt(el)));
const final = toparse.map((el) => el.sort(compareNumbers));

// console.log(JSON.stringify(final[0]) === JSON.stringify([7,9,22,27,37,42]))

let result = [];
const pick = () => {
  let pickedNum = [];
  while (pickedNum.length < 6) {
    let random = Math.random() * 45;
    let filter = Math.floor(random) + 1;

    if (pickedNum.indexOf(filter) == -1) {
      pickedNum.push(filter);
    }
  }
  result = pickedNum.sort(compareNumbers);
  const deDuplication = final.find(
    (el) => JSON.stringify(el) === JSON.stringify(result)
  );

  if (deDuplication) {
    console.log("fail the lotto");
  } else {
    console.log(result);
  }
};

for (var i = 0; i < 2; i++) {
  pick();
}
