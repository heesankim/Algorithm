// 반복문 팩토리얼

function factorial(n) {
  let total = 1;
  for (let i = n; i > 1; i--) {
    total = total * i;
  }
  return total;
}

console.log(factorial(5));

// 이걸 재귀적으로 풀면?

function recurFactorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * recurFactorial(num - 1);
}

console.log(recurFactorial(5))