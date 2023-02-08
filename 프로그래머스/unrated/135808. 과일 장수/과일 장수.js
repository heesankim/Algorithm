function solution(k, m, score) {
    var answer = 0;
    score.sort((a, b) => b - a)
    console.log(score)
    let box = Math.floor(score.length / m);
    console.log(box)
    for(let i = 1; i <= box; i++){
        answer += score[m*i-1] * m;
    }
    return answer;
}