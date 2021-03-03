const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  outpit: process.stdout
})
function plus(x,y) {
  let cx = parseInt(x)
  let cy =parseInt(y)
  return cx + cy
}
var data = []
rl.on("line", (line) => {
  data.push(line)
    if(data.length === 2){
      const val = plus(data[0], data[1])
      console.log(val)
      return rl.close()
    }

  })
  .on('close', () => {


  // rl.close()
  process.exit();
})

