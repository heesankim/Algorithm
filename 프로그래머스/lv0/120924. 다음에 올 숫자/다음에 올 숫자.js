function solution(common){
    let answer = 0
    if ((common[0]+common[2])/2 === common[1]){
        console.log("등차수열")
        let d =common[1]-common[0]
        answer = common[common.length -1]+d
    }
    else{
           console.log("등비수열")
        let r = common[1]/common[0]
        answer = common[common.length - 1]*r
    }
     
    return answer
}