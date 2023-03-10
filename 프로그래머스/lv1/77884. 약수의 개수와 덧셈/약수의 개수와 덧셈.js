function solution(left, right) {
    // 약수의 개수를 구하는 함수를 만든다
    const counting = (num) =>{
        let cnt = 0
        for(let i = 1; i <= num; i++){
            if(num % i === 0){
                cnt = cnt + 1
            }
        }
        return cnt
    }
    let answer = 0;
    while(left <= right){
        const n = counting(left) // 13이 들어온다면 n이 2
        if(n % 2 === 1) answer = answer - left
        else if(n % 2 === 0) answer = answer + left
        left = left + 1
    }
    return answer;
}

//....

