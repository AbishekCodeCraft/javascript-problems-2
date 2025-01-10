// As per the target we need to find the number divisible by target number
function solution(arr) {
  var target = 5;
  var res = [];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % target == 0) {
      res.push(arr[i]);
    }
  }
  console.log(res);
}

var arr = [3, 5, 6, 2, 9, 2, 12, 15, 14, 10];
solution(arr);
