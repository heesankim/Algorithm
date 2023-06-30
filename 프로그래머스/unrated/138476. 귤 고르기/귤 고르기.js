function solution(k, tangerine) {
    let sum = 0;
    let result = 0;
    let obj = {};
    tangerine.forEach((item) => {
        // obj[n] 값이 있으면 1을 더해서 카운트해준다.
        // obj[n] 값이 없으면 1을 넣어준다.
        obj[item] = ++obj[item] || 1;
    })
    // obj = { '1': 1, '2': 2, '3': 2, '4': 1, '5': 2}
    // 서로 다른 종류의 수의 최솟값을 구하기 위해선 종류는 상관없고 값만 필요.
    // 내림차순정렬
    const typeArr = Object.values(obj).sort((a, b) => b - a);
    // typeArr = [2, 2, 2, 1, 1]
    for(let i of typeArr){
        result++;
        sum = sum + i
        
        // 팔려고하는 귤의 갯수를 충족하면 break
        if(sum >= k) break;
    }
    return result
}