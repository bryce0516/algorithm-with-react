function solution(n, lost, reserve) {

  const actualReserve = reserve.filter ( el => (lost.indexOf(el) === -1 ) );
  lost.forEach(element => {
    console.log(lost.indexOf(element))
  });
  const actualLost = lost.filter ( el => (reserve.indexOf(el) === -1 ) );

  const set = Array.apply(undefined, new Array(n)).map( (el, i) => (actualLost.indexOf(i+1) === -1) ?  true : false );

  for (let hero of actualReserve ) {
      if (set[hero - 1 - 1] === false) {
          set[hero - 1 - 1] = true;
      } else if (set[hero - 1 + 1] === false) {
          set[hero - 1 + 1] = true;
      }
  }
  console.log(actualReserve, set, set.filter( el => el).length);
  return set.filter( el => el).length
}

solution(5, [2,4], [1,3,5])