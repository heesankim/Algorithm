function solution(order) {
    var answer = 0;
    let numArr = String(order).split("")
    console.log(numArr)
    for(let i = 0; i < numArr.length; i++){
        if(numArr[i] === "3" || numArr[i] === "6" || numArr[i] === "9"){
            answer = answer + 1
        }
    }
    return answer;
}