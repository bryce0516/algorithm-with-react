const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  outpit: process.stdout
})
const plu = (x) => {
  let parse = x.indexOf(' ')
  let first = parseInt(x.substring(0, parse))
  let second = parseInt(x.substring(parse +1))
  console.log(first + second)
}
const useAbs = (x) => {
    
    let val = Math.abs(x)
    let toyang = Math.sqrt(Math.pow(x, 2));
    let umsu = Number(x) * -1
    console.log('val is',val, toyang,umsu)

}
rl.on("line", function(line){
  console.log(`print your input stirng ${line}`)
  plu(line)
  useAbs(line)
  rl.close()
})

