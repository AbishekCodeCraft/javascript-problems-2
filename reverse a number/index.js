function reverse(n) {
  var res = "";

  while (n > 1) {
    res += Math.floor(n % 10);
    n = n / 10;
  }

  return res;
}

console.log(reverse(123));
