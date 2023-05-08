def solution(a, b):
    temp1 = str(a) + str(b)
    temp2 = str(b) + str(a)
    return max(int(temp1),int(temp2))
    # return answer