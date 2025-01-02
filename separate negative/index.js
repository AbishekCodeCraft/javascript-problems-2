function seperateNegative(arr) {
  // 1st Method
  var res = [];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      res.push(arr[i]);
    }
  }

  // 2nd Method
  var ans = arr.filter((num) => num < 0);

  return { res, ans };
}

var arr = [6, 6, -8, 2, 1, -3, -6, 0, 5, 4, 7];
console.log(seperateNegative(arr));
