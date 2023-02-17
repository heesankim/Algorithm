// 구름에서 rl.close() 삭제해도 되는데 백준에서 삭제하면안된다.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let m = null;
let n = null;
let cnt = 0;
rl.on("line", function (line) {
  if (!m) {
    m = +line;
  } else if (!n) {
    n = +line;
  } else {
    input.push(line.split(" ").map(Number));
    cnt++;
  }
  if (cnt === n) {
    rl.close();
  }
}).on("close", function () {
  solution();
  process.exit();
});

function solution() {}

// bfs로 탐색(1번부터 시작) 방문한 것들 count 하면 된다.
