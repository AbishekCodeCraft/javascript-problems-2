function fibonacci(n) {
  if (n < 0) return [];
  if (n <= 1) return [0];

  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }

  return fib;
}

console.log(fibonacci(10));
