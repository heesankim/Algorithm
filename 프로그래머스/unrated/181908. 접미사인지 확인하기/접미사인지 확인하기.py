def solution(my_string, is_suffix):
    answer = 0
    if my_string[-1] != is_suffix[-1]:
        return 0
    if my_string.find(is_suffix) != -1:
        return 1
    return answer