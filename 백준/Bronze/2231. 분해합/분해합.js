const { log } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let str = input[0];
let N = Number(input[0]);
let answer = [];

function sumNum(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum = sum + parseInt(a[i]);
  }
  return sum;
}

for (let i = N; i > 0; i--) {
  if (i + sumNum(String(i)) === N) {
    answer.push(i);
  }
}
if (answer.length === 0) {
  console.log(0);
} else {
  console.log(Math.min(...answer));
}