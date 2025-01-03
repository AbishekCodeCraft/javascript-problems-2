function findPosition(arr) {
  var target = 1;
  var res = [];
  var ans = [];
  var res2 = [-1, -1];
  var temp = 0;

  // Finding the occurances of the target in an array
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      temp = 1;
      res.push(i);
    }
  }

  // Then getting the first and last position from the result array
  if (temp == 1) {
    ans.push(res[0]);
    ans.push(res[res.length - 1]);
    console.log(ans);
  } else {
    console.log(res2);
  }
}

var arr = [1, 2, 3, 5, 3, 5, 3, 6, 1, 8, 3, 9, 41, 7, 3];
findPosition(arr);
