function solution(s) {
    var answer = [];
    var arr = [-1];
    let count;
    for(i = 0; i < s.length; i++){
        count = 0
        for(j = arr.length - 1; j >= 0; j--){
            count++
            if(arr[j] === s[i]){
                answer.push(count)
                break;
            }
            if(j === 0){
                answer.push(-1)
            }
        }
        arr.push(s[i])
    }
    return answer;
}
