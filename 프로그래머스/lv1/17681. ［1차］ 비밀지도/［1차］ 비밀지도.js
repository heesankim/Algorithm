function solution(n, arr1, arr2) {
    const add = (numStr) => {
        while(numStr.length < n){
            numStr = "0" + numStr
        }
        return numStr
    }
    let arr1Two = []
    for(let i = 0; i < n; i++){
        arr1Two.push(add((arr1[i]).toString(2)))
    }
    // console.log(arr1Two)
    let arr2Two = []
    for(let i = 0; i < n; i++){
        arr2Two.push(add((arr2[i]).toString(2)))
    }
    // console.log(arr2Two)
    let answer = [];
    for(let i = 0; i < n; i++){
        let tempStr = ""
        for(let j = 0; j < n; j++){
            if(arr1Two[i][j] === "0" && arr2Two[i][j] === "0"){
                tempStr = tempStr + " "
            }else{
                tempStr = tempStr + "#"
            }
        }
        answer.push(tempStr)
    }
    
    return answer;
}
// 전부 이진수로 바꿈 각 자리 요소의 인덱스 [][] 를 검사 두개가 전부 0이면 " " else #


// 하나라도 벽이면 전체 벽
// 모두 공백이면 전체 공백
// 벽 -> 1   공백 -> 0

// 01001
// 11110
// 11111
// 1이면 # 
// 0이면 공백