function solution(array, n) {
    array.sort((a, b) => a - b )
    let newArr = array.map((item) => Math.abs(item - n))
    return array[newArr.indexOf(Math.min(...newArr))]

}
// 테스트케이스에 input을 [13, 11], 12와 output 11을 넣고 시도해보세요