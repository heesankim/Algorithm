const fs = require("fs");

let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(Number);
function solution(arr) {
  let answer = [...arr];
  let sum = answer.reduce((a, b) => a + b, 0);
  let ans = []
  // 0번째 인덱스부터 9개니까 8번째 인덱스 까지 돌거야. i는 0번째 인덱스부터 시작
  for (let i = 0; i < 8; i++) {
    // j는 i의 뒤에꺼라서 +1해준다. j는 1번째 인덱스 부터 시작
    for (let j = i + 1; j < 9; j++) {
      if (sum - answer[i] - answer[j] === 100) {
          for (let k = 0; k < 9; k++){
              if (k === i || k === j){
                continue
              }
              ans.push(answer[k])
          }
          break
      }
    }
    if(ans.length === 7){
      break
    }
  }
  return ans;
}

console.log(solution(input).sort((a,b)=> a-b).join("\n"));
