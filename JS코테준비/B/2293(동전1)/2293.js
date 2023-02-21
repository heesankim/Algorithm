const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const [n, k] = input[0].split(" ").map(Number);
let coins = [];
coins.push(Number(input[1]));
coins.push(Number(input[2]));
coins.push(Number(input[3]));

console.log(n);
console.log(k);
console.log(coins);
