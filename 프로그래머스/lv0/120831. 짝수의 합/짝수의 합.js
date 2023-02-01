function solution(n) {
    var answer = 0;

    for(let i = 2; i <= n ;i= i + 2){
        answer = answer + i
    }
    return answer;
}