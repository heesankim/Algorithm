# import math
# def solution(progresses, speeds):
#     count = 1
#     answer = []
#     temp = []
#     leng = len(progresses)
#     for i in range(leng):
#         temp.append(math.ceil((100 - progresses[i]) / speeds[i]))
#     print(temp)
    
#     current = temp[0]
#     for j in range(1,len(temp)):
#         if current < temp[j]:
#             answer.append(count)
#             count = 1
#             current = temp[j]
#         else:
#             count = count + 1
#     answer.append(count)
#     return answer

import math

def solution(progresses, speeds):
    count = 1
    answer = []
    temp = []
    leng = len(progresses)
    for i in range(leng):
        temp.append(math.ceil((100 - progresses[i]) / speeds[i]))
    temp.reverse()
    print(temp)
    
    current = temp.pop()
    while temp:
        if current < temp[-1]:
            answer.append(count)
            count = 1
            current = temp.pop()
        else:
            count += 1
            temp.pop()
    answer.append(count)
    return answer


