var i = "madam";
var length = i.length;
var start = 0;
var end = length - 1;

while (start <= end) {
  if (i[start] == i[end]) {
    output = "True";
  } else {
    output = "False";
    break;
  }
  start++;
  end--;
}
console.log(output);
