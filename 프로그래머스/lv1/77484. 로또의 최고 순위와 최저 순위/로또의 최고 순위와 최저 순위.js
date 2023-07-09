function solution(lottos, win_nums) {
    let num = 0
    let count = 0
    for(let i = 0; i < 6; i++){
        if(lottos[i] === 0){
            count = count + 1
        }
    }
    if(count === 6) return [1,6]
    for(let i = 0; i < 6; i++){
        if(lottos.includes(win_nums[i]) === true){
            num = num + 1
        } 
    }
    if(num === 6) return [1,1]
    if(count === 0 && num === 0) return [6,6]
    console.log(`count = ${count}`)
    console.log(`num = ${num}`)
    return [7-count-num,7-num]
}


// 구매 : 44, 1, 0, 0, 31, 25

// 당첨 : 31, 10, 45, 1, 6, 19


// 7(num)  ->  있으면 -1 없으면 그대로

// 있음 , 없음, 없음, 있음, 없음, 없음
// 6     6    6    5     5   5  

// lottos 배열의 0의 갯수 : count.  

// 정답은 [ count , num ]

// 6 5 4 3 2 1 

// 원래 count = 1 로 주어짐

// 7 7 7 7 7 7 7 만약 num이 7이면 정답은 [1,6]