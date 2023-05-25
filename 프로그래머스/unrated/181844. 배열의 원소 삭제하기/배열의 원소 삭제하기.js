
function solution(arr, delete_list) {
    for (let i = 0; i < arr.length; i++) {
        if (delete_list.includes(arr[i])) {
            arr.splice(i, 1);
            i--; // 요소를 삭제하면 배열이 재조정되므로 인덱스를 업데이트해야 합니다.
        }
    }
    return arr;
}