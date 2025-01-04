function seperateArray(arr) {
  var res = [];
  var res1 = [];
  var temp;

  // Seperating Odd and Even Nos from an array.
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      // res += arr[i]
      res.push(arr[i]);
    } else {
      res1.push(arr[i]);
    }
  }

  // Making Even Nos in a Descending Order
  for (i = 0; i < res.length; i++) {
    for (j = 0; j < res.length; j++) {
      if (res[j] < res[j + 1]) {
        temp = res[j];
        res[j] = res[j + 1];
        res[j + 1] = temp;
      }
    }
  }

  // Making Odd Nos in an Ascending Order
  for (i = 0; i < res1.length; i++) {
    for (j = 0; j < res1.length; j++) {
      if (res1[j] > res1[j + 1]) {
        temp = res1[j + 1];
        res1[j + 1] = res1[j];
        res1[j] = temp;
      }
    }
  }

  console.log(res.concat(res1));
}

var arr1 = [10, 20, 30, 6, 9, 5, 11, 24];
var arr2 = [1, 6, 9, 24, 79, 54, 37];
seperateArray(arr1);
seperateArray(arr2);
