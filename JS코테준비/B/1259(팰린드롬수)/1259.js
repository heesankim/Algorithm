const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
input.pop();

for (let i = 0; i < input.length; i++) {
  let reverseStr = input[i].split("").reverse().join("");
  // console.log(reverseStr);
  console.log(input[i] === reverseStr ? "yes" : "no");
}
