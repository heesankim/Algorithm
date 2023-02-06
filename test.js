n = "123";

let arr = n.split("");
// console.log(arr);

let result = arr.map(Number);
console.log(result);
let finalResult = result.reduce((a, b) => a + b, 0);
console.log(finalResult);
// console.log(result)
// console.log(arr);

// var answer = 0;
// let arr =[]
// // const arr = [...String(n)];
// arr.forEach(n)

// answer = arr
//   .map(Number)
//   .reduce((accumulator, current) => accumulator + current, 0);
// // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
// // console.log('Hello Javascript')

console.clear();

let Arr = [1, 2, 3];
// array.forEach((a,b,c)=>{
// 두개의 매개변수 활용하여 메서드를 사용하면 두 번째 매개변수(b)를 통해 요소의 인덱스를 확인할 수 있음
// 세번째 매개변수(c)는 단순히 호출하기만 하면 배열의 요소 수만큼 배열이 호출 됨 -> 배열 자체를 호출
// })
Arr.forEach((i, a, b) => {
  console.log(i, a, b);
});

if (arr === [1, 2, 3]) {
  console.log("hhh");
}
