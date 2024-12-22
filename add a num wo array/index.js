var n = parseInt(prompt("Enter a number : "));
var res,
  i = 0;
while (n > 0) {
  res = Math.floor(n % 10);
  n = n / 10;
  i += res;
}
console.log(i);
