const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  outpit: process.stdout
})

function spli(x) {
  let result = x.split('')
  let arr = []
  for ( var i in result){
    console.log(result[i])
  } 
}
rl.on("line", function(line){
  console.log(`print your input stirng ${line}`)
  let firstA = spli(line)
  rl.close()
})

