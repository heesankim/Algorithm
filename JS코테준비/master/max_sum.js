// 결국 중첩된 루프이기 때문에 비효율적이다. 이차시간 소요
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;
  // 하나씩 더해가면서 max값을 비교한다
  for (let i = 0; i < arr.length - num + 1; i++) {
    tempSum = 0;
    for (let j = 0; j < num; j++) {
      tempSum = tempSum + arr[i + j];
    }
    if (tempSum > max) {
      max = tempSum;
    }
    // console.log(tempSum, max);
  }
  return max;
}
// console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// sliding window 기법을 사용해보자
// 이차시간이 아닌 O(N) 이나옴

function maxSubarraySumSlidingWindow(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (num > arr.length) return null;
  for (let i = 0; i < num; i++) {
    maxSum = maxSum + arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum
}
// 루프를 배열에 한번만 적용 할 수 있다.

console.log(maxSubarraySumSlidingWindow([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
