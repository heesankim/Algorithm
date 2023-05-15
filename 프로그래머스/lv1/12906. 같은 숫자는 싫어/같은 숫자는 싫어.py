def solution(arr):
    # 연속적으로 숫자가 나오면 담지 않는다.
    # 혹은 제거한다.
    answer = []
    for index in range(len(arr)-1):
        # print(arr[index]) 1 1 3 3 0 1 1
        if arr[index] == arr[index+1]:
            continue
        else:
            answer.append(arr[index])
    answer.append(arr[len(arr)-1])
    return answer