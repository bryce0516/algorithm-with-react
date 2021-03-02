const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  outpit: process.stdout
})

function jungsu (x) {
  return Math.trunc(x)
}

function sosu(_number, jungsulength) {
  var leng = jungsulength.toString().length-1
  var find = _number.toString().indexOf('.')
  var result = _number.substring(find,find+7)
  return result
}
rl.on("line", function(line){
  console.log(`print your input stirng ${line}`)
  let firstA = jungsu(line)
  let secondA = sosu(line,firstA)
  console.log(`print out jungsu ${firstA}`)
  console.log(`print out sosu ${secondA}`)
  rl.close()
})


