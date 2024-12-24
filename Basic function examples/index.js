var a, b;

// Function without argument and return type
function greet() {
  console.log("Hi, Good Morning");
}

greet();

// Function with argument and without return type
function add(a, b) {
  console.log(a + b);
}

add(19, 2);

//Function without argument and with return type
function sub() {
  let a = 10;
  let b = 5;

  return a - b;
}

console.log(sub());

// Function with argument and return type
function mul(a, b) {
  return a * b;
}

console.log(mul(19, 2));
