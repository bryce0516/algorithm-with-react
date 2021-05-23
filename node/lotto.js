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
const lottocsv = fs.readFileSync("./lotto.csv");
const lotto2csv = fs.readFileSync("./lotto2.csv");
const lotto3csv = fs.readFileSync("./lotto3.csv");
const records = parse(lottocsv.toString("utf-8"));
const records2 = parse(lotto2csv.toString("utf-8"));
const records3 = parse(lotto3csv.toString("utf-8"));
let toparse = records.map((el) => el.map((el) => parseInt(el)));
let toparse2 = records2.map((el) => el.map((el) => parseInt(el)));
let toparse3 = records3.map((el) => el.map((el) => parseInt(el)));
const final = toparse.map((el) => el.sort(compareNumbers));
const final2 = toparse2.map((el) => el.sort(compareNumbers));
const final3 = toparse3.map((el) => el.sort(compareNumbers));
// console.log("this is lotto final3", final3.length);
const thisWeek = [6, 21, 36, 38, 39, 43];
let pushedArr = [];
let i = 0;

// final3[0].map((el) => {
//   thisWeek.map((el2, index) => {
//     if (el === el2) {
//       pushedArr.push(el2);
//     }
//   });
// });
// console.log("what inside ", pushedArr);

checkLottoNumber = (result1, result2, pushedArr = [], i) => {
  if (i > 49) return console.log("50이큼", i);

  result1[i].map((el) => {
    result2.map((el2, index) => {
      if (el === el2) {
        pushedArr.push(el2);
      }
    });
  });
  console.log("what inside ", pushedArr, i);
  checkLottoNumber(final3, thisWeek, (pushedArr = []), i + 1);
};

checkLottoNumber(final3, thisWeek, pushedArr, 0);

const lottoMaker = (final, final2, result = []) => {
  let pickedNum = [];
  let i = 0;
  const sixNumbers = (i) => {
    let random = Math.floor(Math.random() * 45) + 1;
    if (pickedNum.indexOf(random) == -1) {
      pickedNum.push(random);
    }
    if (pickedNum.length === 6) return;

    return sixNumbers(i + 1);
  };
  sixNumbers(i);
  const sixNumbersSort = pickedNum.sort(compareNumbers);

  const compareSix = final.find(
    (el) => JSON.stringify(el) === JSON.stringify(sixNumbersSort)
  );
  const compareSix2 = final2.find(
    (el) => JSON.stringify(el) === JSON.stringify(sixNumbersSort)
  );
  let arr;

  if (compareSix2) return console.log("말도안되는 숫자조합에 걸림");
  if (compareSix) return console.log("진짜 6개나와서 다시해야함");

  let j = 0;
  const compareFive = (result2, result1, arr = [], j) => {
    if (result2.length <= j) return true;
    result2[j].map((el2) => {
      result1.map((el1) => {
        if (el1 === el2) {
          arr.push(el1);
        }
      });
    });
    // console.log(arr.length, j);
    if (arr.length < 4)
      return compareFive(final, sixNumbersSort, (arr = []), j + 1);

    if (arr.length >= 4) {
      return false;
    }
  };

  const res = compareFive(final, sixNumbersSort, arr, j);
  if (res) {
    console.log("allpass number", sixNumbersSort, final.length);
  } else {
    lottoMaker(final, final2);
  }
};

// for (var i = 0; i < 50; i++) {
//   lottoMaker(final, final2);
// }

// lottoMaker(final);
// const pick = () => {
//   let pickedNum = [];
//   while (pickedNum.length < 6) {
//     let random = Math.random() * 45;
//     let filter = Math.floor(random) + 1;

//     if (pickedNum.indexOf(filter) == -1) {
//       pickedNum.push(filter);
//     }
//   }
//   result = pickedNum.sort(compareNumbers);
//   console.log(final, "thisis final");
//   console.log("thisis result", result);
//   const deDuplication = final.find(
//     (el) => JSON.stringify(el) === JSON.stringify(result)
//   );
//   result1 = [1, 18, 28, 31, 34];
//   let arr = [];

//   result2 = [[1, 18, 28, 31, 34, 38]];

//   let deli = result2.map((el) =>
//     // el.map((el2, index) => console.log("this is deli", el2, typeof el2))
//     el.map((el2, index) => {
//       console.log("el2 index", el2, result1[index]);
//       if (el2 === result1[index]) {
//         arr.push(el2);
//         if (arr.length === 5) {
//           return console.log("5개이상 중복 값 발견");
//         }
//       }
//     })
//   );
//   console.log("this is after deli", arr);

//   if (deDuplication) {
//     console.log("fail the lotto");
//   } else {
//     console.log(result);
//   }
// };

// for (var i = 0; i < 2; i++) {
//   pick();
// }
