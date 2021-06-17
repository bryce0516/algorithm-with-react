function modInverse(e, phi) {
  var m0 = phi;
  var t;
  var q;

  var x0 = 0;
  var x1 = 1;

  if (phi === 1) {
    return 0;
  }

  while (e > 1) {
    q = Math.floor(e / phi);

    t = phi;
    phi = e % phi;
    e = t;
    t = x0;
    x0 = x1 - q * x0;
    x1 = t;
  }

  if (x1 < 0) {
    x1 += m0;
  }
  console.log("modInverse value", x1);
  return x1;
}

modInverse(7, 40);

function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function RSAKeyPair(p, q) {
  if (!(isPrime(p) && isPrime(q))) {
    return;
  }
  if (p === q) {
    return;
  }

  var n = p * q;
  var phi = (p - 1) * (q - 1);
  var e = 3;
  var d = modInverse(e, phi);

  console.log(`public key is (${e}, ${n}), secure key is (${d}, ${n})`);
  return [
    [e, n],
    [d, n],
  ];
}

RSAKeyPair(271, 787);

// console.log(Math.pow(50, 3) % 55);
