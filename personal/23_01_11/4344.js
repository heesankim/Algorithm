/**
 * bok.kr/4344
 * 평균은 넘겠지
  5 ( 테스트케이스 숫자 )
  5 50 50 70 80 100
  7 100 95 90 80 70 60 50
  3 70 90 80
  3 70 90 81
  9 100 99 98 97 96 95 94 93 91
 */

const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();

input = input.split("\n"); // 줄바꿈 기준으로 나눔

const inputC = +input[0]; // 정수로 변환

const inputTestCase = [];
// console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");

for (i = 1; i <= inputC; ++i) { 
  const arr = input[i].split(" ").map((item) => +item);
  // let newArr = [];  // 이과정이랑 똑같은 기능을 하는게 map
  // for (i = 0; i < arr.length; ++i) {
  //   newArr.push(+arr[i]);
  // }
  // console.log(arr)
  const newArr = [];
  for (let i = 1; i <= arr[0]; ++i) {
    newArr.push(arr[i]);
  }
  // console.log(newArr)
  const testCase = {
    N: arr[0],
    arr: newArr,
  };
  // console.log("testCase", testCase);
  inputTestCase.push(testCase);
}
// console.log("inputTestCase :", inputTestCase);
// 입력 다만듬

// testCase는 N 과 N명의 점수 배열로 이루어짐
/*
  C = 5
  testCASE = [
    {
      N = 5,
      arr: [50,50,70,80,100]
    }
    {
      N = 7,
      arr: [100 95 90 80 70 60 50]
    }
  ]
 */

// 어떤 입력이 들어와야 내가 풀 수 있을까 생각
// 프로그래머스 처럼 정제해서 넣어주는 방식임
function solution(C, testCase) {
  
  // console.log("C", C);
  // console.log("testCase: ", testCase);
}
// 이제 이 함수 안에서 문제 푸는 로직만 생각하면 됨
solution(inputC, inputTestCase);

