// 투 포인터(양 쪽 끝에서 출발)
function sumZero(array) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }2
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 3, 5, 10]));
