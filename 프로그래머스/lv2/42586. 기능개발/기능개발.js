function solution(progresses, speeds) {
  let count = 1;
  const answer = [];
  const temp = [];
  const leng = progresses.length;
  
  for (let i = 0; i < leng; i++) {
    temp.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }
  
  let current = temp[0];
  
  for (let j = 1; j < temp.length; j++) {
    if (current < temp[j]) {
      answer.push(count);
      count = 1;
      current = temp[j];
    } else {
      count = count + 1;
    }
  }
  
  answer.push(count);
  return answer;
}

