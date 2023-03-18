function solution(s) {
  const charCounts = {};
  // 문자열에서 각 문자의 등장 횟수를 계산합니다.
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!charCounts[char]) {
      charCounts[char] = 1;
    } else {
      charCounts[char]++;
    }
  }
  // 등장 횟수가 1인 문자들을 찾아서 배열에 저장합니다.
  const uniqueChars = [];
  for (const [char, count] of Object.entries(charCounts)) {
    if (count === 1) {
      uniqueChars.push(char);
    }
  }
  // 등장 횟수가 1인 문자들을 사전순으로 정렬한 결과를 반환합니다.
  return uniqueChars.sort().join('');
}
