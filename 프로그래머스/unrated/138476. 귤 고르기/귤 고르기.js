function solution(k, tangerine) {
    let answer = 0;
    let obj = {}
    tangerine.forEach((item) => {
        obj[item] = ++obj[item] || 1;
    })
    const sortedArr = Object.values(obj).sort((a, b) => b - a)
    let sum = 0
    for(let i of sortedArr){
        answer++
        sum = sum + i
        // 팔려고 하는 귤의 갯수가 가득 차면 스톱
        if(sum >= k) break
    }
    return answer;
}