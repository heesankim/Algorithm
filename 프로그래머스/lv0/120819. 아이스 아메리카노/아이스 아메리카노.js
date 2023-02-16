function solution(money) {
    var answer = [];
    const coffee = 5_500
    const quotient = parseInt(money / coffee )
    const remainder = money % coffee
    
    answer.push(quotient)
    answer.push(remainder)
    return answer;
}