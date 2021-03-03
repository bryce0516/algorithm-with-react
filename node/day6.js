const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  outpit: process.stdout
})


function reverseInt(x) {
  let reversed = x.toString().split("").reverse().join("")
  return reversed
}
rl.on("line", function(line){
  if(line <= 10000 || line >=99999) {
    return console.log('your input is wrong input again')
  }
  let arr = []
  const after = reverseInt(line).split('')
  for ( var i= after.length -1 ; i>= 0; i--) {
    // console.log([parseInt(after[i])])
    console.log([parseInt(after[i] * Math.pow(10,i))])
    console.log(i)
  }
  // console.log(`print your input stirng ${}`)
  
  // console.log(`print out jungsu ${firstA}`)
  // console.log(`print out sosu ${secondA}`)
  rl.close()
})
