function solution(num, k) {
    var answer = 0;
    let numArr = String(num).split("").map(Number)
    // console.log(numArr)
    answer = numArr.indexOf(k) + 1
    if(answer === 0){
        return -1
    }
    return answer;
}