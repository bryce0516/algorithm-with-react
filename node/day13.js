function findSum(arr, weight) {
  let gg = arr.length;
  for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
    for (var j = i + 1; j < arrLength; j++) {
      if (arr[i] + arr[j] == weight) {
        console.log([i, j]);
      }
    }
  }
  console.log(-1);
}
