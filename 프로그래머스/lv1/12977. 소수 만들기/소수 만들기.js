function solution(nums) {
    var answer = 0;
    for(let i = 0; i < nums.length-2;i++){
        for(let j = i+1; j < nums.length-1; j++){
            for(let k = j+1; k < nums.length ;k++ ){
                if(isPrime(nums[i] + nums[j] +nums[k])){
                    answer++
                }
            }
        }
    }
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    return answer;
}

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}