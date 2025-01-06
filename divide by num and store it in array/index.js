function solution(arr, num) {
  var res = [];

  for (i = 0; i < arr.length; i++) {
    var a = Math.floor(arr[i] / num);
    res.push(a);
  }
  console.log(res);
}

var arr = [2, 2, 4, 6, 26, 48, 46, 24, 100];
var num = 3;
solution(arr, num);
