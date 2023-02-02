

function solution(numbers) {
    var answer = -1;
    const sum = numbers.reduce((a,b) => (a+b));
    answer = 45 - sum
    return answer;
}