def solution(my_string, is_prefix):
    
    if len(my_string) < len(is_prefix):
        return 0
    for i in range(len(is_prefix)):
        if is_prefix[i] == my_string[i]:
            continue
        else:
            return 0
    return 1