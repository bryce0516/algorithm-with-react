const readline = require('readline')
var fs = require('fs');
const rl = readline.createInterface({
  input: process.stdin,
  outpit: process.stdout
})

let parser = new DOMParser();

let pickedNum = []
const pick = () => {

  while(pickedNum.length < 6){
    let random = Math.random() * 45
    let filter = Math.floor(random) + 1

    if (pickedNum.indexOf(filter) == -1) {
      pickedNum.push(filter)
    }
  }
  const stringContainingHTMLSource = fs.readFile('excel.xls', 'utf8', function (err, data){
    doc = parser.parseFromString(data, "text/html")
  })

  console.log(pickedNum)
}


pick()