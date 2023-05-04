def solution(numbers):
    new_arr = sorted(numbers)
    temp = len(numbers)
    return new_arr[temp-1] * new_arr[temp-2]