function solution(d, budget) {
    let sum = 0
    var cnt = 0;
    let sortD = d.sort((a,b) => a - b)
    for(let i = 0; i < sortD.length; i++){
        sum = sum + sortD[i]
        if(sum > budget) break
        else cnt = cnt + 1
    }
    console.log(sortD)
    console.log(sum)
    console.log(cnt)
    return cnt;
}