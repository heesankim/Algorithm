function solution(my_string, indices) {
    let answer = ''
    // indices.sort((a,b) => a - b)
    for(let i = 0 ; i < my_string.length; i ++){
        if(!indices.includes(i)){
            // indices 배열에 i가 없으면(false)
            answer = answer + my_string[i] // 빈문자열에 더해라 
        }
    }
    return answer;
}
let arr = [1,2,3]
