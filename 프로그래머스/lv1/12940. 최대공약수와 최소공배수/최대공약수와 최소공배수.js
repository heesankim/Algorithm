function solution(n, m) {
    var answer = [];
    let num1 = Math.max(n,m)
    let num2 = Math.min(n,m)
    while(num2> 0){
        let r = num1 % num2
        num1 = num2
        num2 = r
    }
    answer.push(num1)
    answer.push(n*m / num1)
    return answer;
}