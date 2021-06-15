function matrix(a, b) {
  var jaggerArray = new Array(a);
  for (var i = 0; i < a; i++) {
    jaggerArray[i] = new Array(a);
  }
  var value = 0;
  for (var j = 0; j < a; j++) {
    for (var k = 0; k < b; k++) {
      value += 1;
      jaggerArray[j][k] = value;
    }
  }
  console.log(jaggerArray);

  return jaggerArray;
}

matrix(5, 4);
