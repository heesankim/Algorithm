function minSubArrayLen(nums, sum) {
  let total = 0; // 하위 배열의 합
  let start = 0; // 하위 배열의 시작 인덱스
  let end = 0; // 하위 배열의 마지막 인덱스
  let minLen = Infinity; // 리턴되어야하는 하위 배열의 최소 길이. 배열 길이를 알 수 없으므로 초기값을 무한대로 정한다.

  // 진행 조건: 시작점이 배열의 길이를 초과할 수 없음
  while (start < nums.length) {
    /*연속된 하위 배열의 합이 sum 값보다 작고, 하위 배열의 마지막 인덱스가 배열 길이보다 작을 경우에는 계속 창의 길이를 늘려간다. */
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // 현재 하위 배열의 합이 sum보다 크거나 같을 때부터는 이제 하위배열의 길이를 줄여야한다.
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start]; // 하위 배열 합에서 제일 왼쪽 요소를 제거했으므로 값을 변경한다.
      start++; // 하위 배열의 시작 인덱스를 하나 옮긴다.
    }
    // 현재 하위 배열의 합이 sum보다 작고, 하위 배열의 마지막 요소가 nums의 길이와 같아졌을 때 종료하지 않으면 무한 루프에 빠지게 된다.
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
