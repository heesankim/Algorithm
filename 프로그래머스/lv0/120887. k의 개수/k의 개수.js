function solution(i, j, k) {
  let count = 0;
  for (let num = i; num <= j; num++) {
    // 각 숫자를 문자열로 변환한 후, k가 포함되어 있는지 확인합니다.
    const numStr = String(num);
    for (let char of numStr) {
      if (char === String(k)) {
        count++;
      }
    }
  }
  return count;
}