function solution(n) {
    var answer = [];
    let i = 1
    while(i <= n){
        answer.push(i)
        i = i + 2
    }
    return answer;
}