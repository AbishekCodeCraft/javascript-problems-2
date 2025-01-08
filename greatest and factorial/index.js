function solution(arr) {
  // FINDING MAX ELEMENT
  var max = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  console.log(max);

  // CALCULATING FACTORIAL OF THAT MAX ELEMENT
  var sum = 1;
  for (i = 1; i <= max; i++) {
    sum = sum * i;
  }

  console.log(sum);
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
solution(arr);
