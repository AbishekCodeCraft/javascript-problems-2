function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  let count = new Array(26).fill(0);
  for (let i = 0; i < str1.length; i++) {
    count[str1.charCodeAt(i) - 97]++;
    count[str2.charCodeAt(i) - 97]--;
  }

  return count.every((num) => num === 0);
}

console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("hello", "world"));
console.log(areAnagrams("race", "care"));
console.log(areAnagrams("night", "thing"));
