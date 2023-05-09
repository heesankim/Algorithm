def solution(my_string):
    answer = []
    result = ""
    for i in range(1,len(my_string) + 1): # 1 2 3 4 5 6
            # print(my_string[-i]) a n a n a b
        result = my_string[-i] + result
        print(result)
        answer.append(result)
    print(answer)
    # answer.sort()
    print(sorted(answer))
    
    return sorted(answer)