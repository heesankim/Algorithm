def solution(arr, k):
    result = []
    if k % 2 == 1:
        result = [i * k for i in arr]
    else:
        result = [i + k for i in arr]
    return result