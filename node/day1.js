
function solution(n, lost, reserve) {      
    const answer = n - lost.filter(a => {
      console.log('a value =', a)
        const b = reserve.find(r =>
          // console.log(`r-a value =, ${Math.abs(r-a)} r value= ${r} `)
          Math.abs(r-a) <= 1
        )
        console.log('b value =', b)
        if(!b) return true
        reserve = reserve.filter(r => r !== b)
        console.log('resever', reserve)
    }).length
    console.log(answer)

    const answer2 =lost.filter(a => {
      const b = reserve.find(r =>Math.abs(r-a) <= 1)
        if(!b) return true
        reserve = reserve.filter(r => r !== b)
    }).length
    console.log('andswer2',answer2, n-answer2)
}

solution(5, [2,4], [1,3,5])
