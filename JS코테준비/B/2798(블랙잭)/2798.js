const { log } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let n = input[0].split(" ").map((item) => +item)[0];
let m = input[0].split(" ").map((item) => +item)[1];
let cards = input[1].split(" ").map(Number);
// N(카드 갯수) M(이 수를 넘지 않아야 함)
// 정수가 적혀 있는 N장의 카드 5개 나열
let max = 0;

loop1: for (let i = 0; i < n - 2; i++) {
  for (let j = i + 1; j < n - 1; j++) {
    for (let k = j + 1; k < n; k++) {
      const sum = cards[i] + cards[j] + cards[k];
      if (sum > max && sum <= m) {
        max = sum;
      }
      if (max === m) {
        break loop1;
      }
    }
  }
}
console.log(max);
