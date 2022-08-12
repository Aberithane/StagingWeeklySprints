console.log("Right Shift Start");
rightShift(80, 3);
rightShift(-24, 2);
rightShift(-24, -2);
rightShift(-5, 1);
console.log("Right Shift End");

console.log("Simple Perimeter Start");
simplePerimeter("s", 7);
simplePerimeter("c", 4);
simplePerimeter("c", 9);
simplePerimeter('b',5);
console.log("Simple Perimeter End");

function rightShift(x, y) {
  if (y < 0) {
    y = y * -1;
    console.log("Neg Test");
  }
  let z = Math.pow(2, y);
  console.log(x / z);
}

function simplePerimeter(l, num) {
  console.log(l == "c" ? 6.28 * num : l == "s" ? 4 * num : undefined);
}
