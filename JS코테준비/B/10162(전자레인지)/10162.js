const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split()
  .map(Number);
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim();

function solve(input) {
  if (input % 10 !== 0) return -1;
  let result = [];
  result.push(parseInt(input / 300));
  input = input % 300;
  result.push(parseInt(input / 60));
  input = input % 60;
  result.push(parseInt(input / 10));
  result.join(" ")
  return result.join(" ")
}
console.log(solve(input))