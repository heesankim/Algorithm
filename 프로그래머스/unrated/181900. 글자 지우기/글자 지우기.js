function solution(my_string, indices) {
    let answer = ''
    indices.sort((a,b) => a - b)
    for(let i = 0 ; i < my_string.length; i ++){
        if(!indices.includes(i)){
            answer = answer + my_string[i]
        }
    }
    return answer;
}