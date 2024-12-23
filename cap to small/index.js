var s = "HELLOW";
var ascii;
var conv,
  res = "";

for (i = 0; i < s.length; i++) {
  ascii = s.charCodeAt(i);
  ascii = ascii + 32;

  conv = String.fromCharCode(ascii);
  res = res + conv;
}
console.log(res);
