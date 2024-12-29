function missingNum(arr, n) {
  var temp = 0;
  var ans = 0;

  for (i = 0; i < arr.length; i++) {
    temp = 0;
    for (j = 0; j < arr.length; j++) {
      if (arr[j] == n) {
        temp = 1;
        n--;
      }
    }
  }

  if (temp == 0) {
    ans = n;
  }

  return ans;
}

console.log(missingNum([7, 6, 3, 9, 5, 2, 8, 1, 10], 10));
