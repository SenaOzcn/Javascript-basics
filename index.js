function f1() {}

function f2() {
  return;
}

console.log(
  f1(), // undefined
  f2(), // undefined
);
