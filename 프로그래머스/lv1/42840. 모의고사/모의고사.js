function solution(answers) {
    var answer = [];
    let first, second, third;
    first = second = third = 0;
    let firstAnswer = [1, 2, 3, 4, 5]; // 5
    let secondAnswer = [2, 1, 2, 3, 2, 4, 2, 5]; // 8 
    let thirdAnswer = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 10
    let len = answers.length;
    
    for (let i=0; i<len; i++){
        if (answers[i]===firstAnswer[i%5]) first++;
        if (answers[i]===secondAnswer[i%8]) second++;
        if (answers[i]===thirdAnswer[i%10]) third++;
    }
    
    let maxScore = Math.max(first, second, third)
    if (first === maxScore) answer.push(1);
    if (second === maxScore) answer.push(2);
    if (third === maxScore) answer.push(3);

    return answer;
}