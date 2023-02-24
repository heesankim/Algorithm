let arr = "17";
let fixed = 3;

function solution(numbers) {
  const answer = [];
  let nums = numbers.split("");
  console.log(nums);

  // 소수 판별
  const isPrimeNum = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  // 순열 만들기
  const getPermutation = (arr, fixed) => {
    if (arr.length >= 1) {
      for (let i = 0; i < arr.length; i++) {
        const newNum = fixed + arr[i];
        console.log(fixed)
        console.log("🚀 ~ file: permutation.js:23 ~ getPermutation ~ newNum:", newNum)
        const copyArr = [...arr];
        console.log("🚀 ~ file: permutation.js:25 ~ getPermutation ~ copyArr:", copyArr)
        copyArr.splice(i, 1);
        console.log("🚀 ~ file: permutation.js:27 ~ getPermutation ~ copyArr:", copyArr)
        if (!answer.includes(+newNum) && isPrimeNum(+newNum)) {
          answer.push(+newNum);
          console.log("🚀 ~ file: permutation.js:30 ~ getPermutation ~ answer:", answer)
        }
        getPermutation(copyArr, newNum);
      }
    }
  };

  getPermutation(nums, "");
  return answer.length;
}
console.log(solution(arr));
