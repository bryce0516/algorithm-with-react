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

function findSumBetter(arr, weight) {
  var hashtable = {};
  for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
    var currentElement = arr[i];
    diffrence = weight - currentElement;
    if (hashtable[currentElement] != undefined) {
      return [i, hashtable[currentElement]];
    } else {
      hashtable[diffrence] = i;
    }
  }
  return -1;
}

console.log(findSumBetter([1, 2, 3, 4, 5], 9));
