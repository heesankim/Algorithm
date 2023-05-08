def solution(arr, n):
    answer = []
    leng = len(arr)
    if leng % 2 == 1:
        for i in range(leng):
            if i % 2 == 0:
                answer.append(arr[i] + n)
            else:
                answer.append(arr[i])
    else:
        for i in range(leng):
            if i % 2 == 1:
                answer.append(arr[i] + n)
            else:
                answer.append(arr[i])

    return answer