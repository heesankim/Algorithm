def solution(my_string):
    answer = []
    new_str = my_string.split(" ")
    for i in new_str:
        if i == "":
            continue
        else:
            answer.append(i)
    
    return answer