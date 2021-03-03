const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  outpit: process.stdout
})
function expInt (x) {
  return parseInt(x)
}

function expFloat (x) {
  return parseFloat(x)
}
function toOctal (x) {
  var num = parseInt(x)
  console.log(typeof num)
  var toOcl = num.toString(8)

  return toOcl
}

function toHex(x) {
  var num = parseInt(x)
  var toHex = num.toString(16)
  return toHex
}
function receiveOctal(x) {

  var change = parseInt(x, 8)
  return change
}

function toAsc(x) {
  
  return String.fromCharCode(x)
}
rl.on("line", function(line){
  console.log(`print your input stirng ${line}`)
  const num = expInt(line)
  const flo = expFloat(line)
  const octal = toOctal(line)
  const hex = toHex(line)
  const reoc = receiveOctal(line)
  const asc = toAsc(line)
  console.log(num, flo ? flo : null, octal,hex, hex.toUpperCase(),reoc, asc)
  rl.close()
})

