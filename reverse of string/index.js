function reverse(word) {
  let len = word.length;
  let res = "";

  for (let i = len - 1; i >= 0; i--) {
    res += word[i];
  }

  return res;
}

console.log(reverse("Abishek"));
