const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  outpit: process.stdout
})
console.log(`'Hello'`)
console.log(`"Hello World"`)
console.log(`"!@#$%^&*()"`)
console.log(`"C:\Download\hello.cpp"`)

const num = 1

console.log(num)

const float = 1.414213

console.log(float)


const first = "A"
const second = "b"
const change = (i, ii) => {
  return console.log(ii, i)
}

change(first, second)

function banalrim (x) {
  return Number.parseFloat(x).toFixed(2)
}

console.log(banalrim(1.59254))

function three(x) {
  return console.log(`${x} ${x} ${x}`)
}
three(125)



function eraseString(s){
  return s.replace("-","")
}
rl.on("line", function(line){
  console.log(`print input stirng ${line}`)
  let fianl = eraseString(line)
  console.log(`print input number ${fianl}`)
  rl.close()
})


