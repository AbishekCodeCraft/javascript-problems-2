function solution() {
  var even = [];
  var odd = [];
  var even_add = 0;
  var odd_add = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  for (i = 0; i < even.length; i++) {
    even_add += even[i];
  }

  for (j = 0; j < odd.length; j++) {
    odd_add += odd[j];
  }

  console.log("Addition of Even Nos : ", even_add);
  console.log("Addition of Odd Nos : ", odd_add);
}

var arr = [1, 2, 3, 4];
solution(arr);
