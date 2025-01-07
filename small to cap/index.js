function solution(s) {
  var ascii;
  var conv = "";
  var res = "";

  for (let i = 0; i < s.length; i++) {
    ascii = s.charCodeAt(i);
    ascii = ascii - 32;
    conv = String.fromCharCode(ascii);
    res = res + conv;
  }
  return res;
}

var s = "hello";
console.log(solution(s));
