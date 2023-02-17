const { log } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let str = input[0];
let N = Number(input[0]);
// console.log(str);
// console.log(N);
let answer = [];

function sumNum(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum = sum + parseInt(a[i]);
  }
  return sum;
}
// console.log(sumNum(str));

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
// N의 분해합 = 생성자(M) + 각 자릿수의 합
// N의 가장작은 생성자를 알아내라.
// 생성자가 여러개가 될 수 있으니까 생성자들을 일단 배열에 담아서 최솟값만 출력한다.
// 생성자가 없으면 0을 출력해라
