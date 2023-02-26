function solution(hp) {
    let cnt = 0
    while(hp !== 0){
        if(hp >= 5){
            hp = hp - 5
            cnt = cnt + 1
        }
        else if(3 <= hp && hp < 5 ){
            hp = hp - 3
            cnt = cnt + 1
        }else if(0 < hp < 3){
            hp = hp - 1
            cnt = cnt + 1
        }
    }
    return cnt;
}

// 장군 5 병정 3 일 1
// 사냥감 hp 가 주어질때 최소한의 병력을 구성하려면 몇 마리가 필요한지 return