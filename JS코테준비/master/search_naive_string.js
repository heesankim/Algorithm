function naiveSearch(long, short) {
  let cnt = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      console.log(short[j], long[i]);
      if (short[j] !== long[i + j]) {
        break;
      }
      if(j === short.length - 1) cnt++
    }
  }
  return cnt
}

console.log(naiveSearch("lorie loled", "loled"));
