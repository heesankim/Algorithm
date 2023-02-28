function solution(my_string) {
    var answer = [];
    for(let i = 0; i < my_string.length; i++){
        if(my_string[i] < 10){
            answer.push(my_string[i])
        }
    }
    answer.sort()
    answer = answer.map(Number)
    return answer;
}