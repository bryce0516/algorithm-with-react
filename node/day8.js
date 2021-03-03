const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  outpit: process.stdout
})

function reverseInt(x) {
  let toStr = x.toString()
  let firstDot = toStr.indexOf('.')
  let secondDot = toStr.indexOf('.', (firstDot+1))
  let year = toStr.substring(0, firstDot)
  let month = toStr.substring(firstDot+1, secondDot)
  let day = toStr.substring(secondDot+1)
  const complete = `${day}-${month}-${year}`
  let rev = x.toString().split('').reverse().join('')
  let change = parseInt(rev)
  console.log(complete)
}
rl.on("line", function(line){
  console.log(`print your input stirng ${line}`)
  reverseInt(line)
  rl.close()
})

