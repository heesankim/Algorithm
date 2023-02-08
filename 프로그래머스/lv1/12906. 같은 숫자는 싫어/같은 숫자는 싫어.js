// 연속적으로 나타나는 숫자는 하나만 남겨라
// 남은 수 반환할 때는 arr의 원소들의 순서는 유지해야함
function solution(arr)
{
    const result = []
    for(let i = 0; i < arr.length; i++){
        if(result[result.length-1] !== arr[i]){
            result.push(arr[i])
        }
    }
    return result
//     var answer = [];
//     let temp;
//     for(let i = 0;i < arr.length-1; i++){
//         if(arr[i] === arr[i+1]){
//             temp = arr[i+1]
//         }
//         else if(arr[i] !== arr[i+1]){
//             answer.push(temp)
//             temp = arr[i+1]
//             }
//         }
}