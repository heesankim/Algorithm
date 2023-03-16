function solution(before, after) {
    if(before.length !== after.length) return 0
    let be = before.split("").sort();
    // console.log(before,be)
    let af = after.split("").sort();
    for(let i = 0; i < be.length; i++){
        if(be[i] === af[i]) continue
        else return 0
    }
    // console.log(be,af)
    return 1
}
