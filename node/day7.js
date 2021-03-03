const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  outpit: process.stdout
})

const erase = (x) => {
  const str = x.toString()
  let first = str.indexOf(':')
  let second = str.indexOf(':', (first + 1))
  let cut = str.substring(first + 1, second)
  console.log(cut)
}
rl.on("line", function(line){
  console.log(`print your input stirng ${line}`)
  erase(line)
  rl.close()
})

