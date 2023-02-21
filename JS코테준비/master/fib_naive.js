// 시간복잡도 2^n
// function fib_naive(n) {
//   let result = 0;
//   if (n === 0) return 0;
//   else if (n === 1) return 1;
//   else {
//     result = fib_naive(n - 1) + fib_naive(n - 2);
//   }
//   return result;
// }
// console.log(fib_naive(40));

// DP 사용 시간복잡도: o(n)
let fibAraay = [0, 1];
function fib_recur_dp(n) {
  let result = 0;
  if (n < fibAraay.length) return fibAraay[n];
  else {
    result = fib_recur_dp(n - 1) + fib_recur_dp(n - 2);
    fibAraay.push(result);
  }
  return result;
}
console.log(fib_recur_dp(40));

// RecursionError : maximum recursion depth ~~
// 최초 problem 부터 풀려고 하기 때문에 top-down 방식임
// top down 방식은 자연스럽지만 스택의 리밋이 있기 떄문에 좋은 솔루션은아니다.

// bottom up 추천 for loop

let fib_array = [0, 1];
function fib_dp_bottom_up(n) {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else {
    for (let i = 2; i <= n; i++) {
      let num = fib_array[i - 1] + fib_array[i - 2];
      fib_array.push(num);
    }
  }
  return fib_array[n];
}
console.log(fib_dp_bottom_up(7))

