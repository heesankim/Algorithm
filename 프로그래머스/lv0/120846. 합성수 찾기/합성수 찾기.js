function solution(n) {
    
    const measure = (a) => {
    let cnt = 0
    let answer = false
    for(let i = 1; i <= a; i++){
        if(a % i === 0){
            cnt++
        }
    }
    if(cnt >= 3){
        answer = true
    }
        return answer
    }
    let cnt = 0;
    for(let i = 4; i <= n; i++){
        if(measure(i)){
            cnt = cnt + 1
        }
    }
    return cnt;
}

// 약수의 개수가 세 개 이상인 수를 합성 수 



// 합성수인지 판별하는 함수
function measure(num) {
    let count = 0
    let answer = false
    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            count++
        }
    }
    if(count >= 3){
        answer = true
    }
    return answer
}
