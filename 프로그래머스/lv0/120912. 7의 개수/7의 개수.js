function solution(array) {
    var answer = 0;
    let str = array.join("")
    console.log(str)
    for(let i = 0; i < str.length; i++){
        if(str[i] === '7'){
            answer = answer + 1
        }
    }
    return answer;
}