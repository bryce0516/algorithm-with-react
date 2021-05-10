const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   outpit: process.stdout,
// });

const versionCheck = (ver1, ver2) => {
  // var version1 = ver1.split(".").join("");
  // var version2 = ver2.split(".").join("");
  var parts1 = ver1.split(".");
  var parts2 = ver2.split(".");
  var minLength = Math.max(parts1.length, parts2.length);
  console.log("minLength", minLength);
  var i = 0;
  var nRes = 0;
  while (i < minLength) {
    var nP1 = i < parts1.length ? parseInt(parts1[i], 10) : 0;
    var nP2 = i < parts2.length ? parseInt(parts2[i], 10) : 0;
    if (isNaN(nP1)) {
      nP1 = 0;
    }
    if (isNaN(nP2)) {
      nP2 = 0;
    }
    console.log("np", nP1, nP2);
    if (nP1 != nP2) {
      nRes = nP1 > nP2 ? 1 : -1;
      console.log("next reutrn", nRes);
      break;
    }
    i++;
  }
  // for (var i = 0; i < minLength; i++) {
  //   var nP1 = i < parts1.length ? parseInt(parts1[i], 10) : 0;
  //   var nP2 = i < parts2.length ? parseInt(parts2[i], 10) : 0;
  //   console.log("np1,np2", nP1, nP2);
  //   if (isNaN(nP1)) {
  //     nP1 = 0;
  //   }
  //   if (isNaN(nP2)) {
  //     nP2 = 0;
  //   }

  //   if (nP1 != nP2) {
  //     nRes = nP1 > nP2 ? 1 : -1;
  //     break;
  //   }
  // }
  return console.log(nRes);
};
versionCheck("13.14.1001", "13.14.11");

// rl.on("line", function (ver1) {
//   console.log(`print your input stirng ${ver1}`);
//   versionCheck(ver1);
//   rl.close();
// });
