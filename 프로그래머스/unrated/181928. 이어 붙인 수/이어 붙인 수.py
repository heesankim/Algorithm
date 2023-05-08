def solution(num_list):
    answer = 0
    odd_str = ""
    even_str = ""
    for i in num_list:
        if i % 2 == 1:
            odd_str = odd_str + str(i)
        else:
            even_str = even_str + str(i)
    return int(even_str) + int(odd_str)