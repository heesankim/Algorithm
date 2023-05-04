def solution(common):
    answer = 0
    
    if (common[1] - common[0]) == (common[2] - common[1]): # 등차수열
        r = common[1] - common[0]
        return common[len(common) -1] + r
    else:
        r = common[1] / common[0]
        return common[len(common) -1] * r