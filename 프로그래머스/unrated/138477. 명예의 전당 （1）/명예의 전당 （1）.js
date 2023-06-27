function solution(k, score) {
    var answer = [];
    var arr = [];
    for(var i = 0; i < score.length; i++){
        arr.push(score[i]);
        arr.sort((a, b) => b - a);
        if(i >= k) arr.pop();
        answer.push(arr[arr.length - 1]);
    }
    return answer;
}