function solution(brown, yellow) {
    var answer = [];
    let total = brown + yellow;
    for (let height = 3; height <= total; height++) {
        if (total % height === 0) {
            let width = total / height;
            if (width < height) return [width,height]
            if (2 * (width + height - 2) === brown) {
                return [width, height];
            }
        }
    }
}
// 18개, 노란색 격자가 6개인 경우에는 카펫의 가로 길이와 세로 길이가 각각 8과 3이 되야함
// 하지만 이전의 함수는 이러한 특성을 고려하지 않고 6과 4를 반환할 것입니다.
// input = 갈색 격자 수, 노란색 격자 수
// output = 가로,세로

// 두 수를 더한 값에서 약수를 구한 다음에 
// ex) 10,2 -> 12 -> 1,2,3,4,6,12 에서 중간값 2개
// ex 24,24 -> 48 -> 1,2,3,4,6,8,12,16,24,48  
// 여기서 약수의 갯수는 10개  5번째 , 4번째 [[length/2], [(length/2 -1)]]

// 18 6 -> 24 -> 1,2,3,6,9,18