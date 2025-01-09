function solution(arr, target) {
  var ans = [];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      ans.push(arr[i]);
    }
  }
  console.log(`Number ${target} is repeated ${ans.length} times.`);
}

var arr = [1, 2, 3, 6, 1, 1, 1, 5, 2, 3, 6];
var target = 1;

solution(arr, target);
