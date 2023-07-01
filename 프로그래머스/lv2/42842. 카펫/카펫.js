function solution (brown,yellow) {
    let anwer = []
    let total = brown + yellow;
    for(let height = 3; height <= total; height++){
        if(total % height === 0){
            let width = total / height;
            // 갈색 격자의 수는 노란색 격자를 둘러싸는 테두리 이기 때문에 밑에 조건을 만족해야 함
            if(2 * (width + height - 2) === brown){
                return [width, height]
            }
        }
    }
}