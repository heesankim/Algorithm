import math
def solution(progresses, speeds):
    count = 1
    answer = []
    temp = []
    leng = len(progresses)
    for i in range(leng):
        temp.append(math.ceil((100 - progresses[i]) / speeds[i]))
    print(temp)
    
    current = temp[0]
    for j in range(1,len(temp)):
        if current < temp[j]:
            answer.append(count)
            count = 1
            current = temp[j]
        else:
            count = count + 1
    answer.append(count)
    return answer

# # 5 10 1 1 20 1
# 처음엔 카운트 1 [1,]
# return 이 1 3 2


# 진도가 100%일때 서비스에 반영
# 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발 될 수도 있음 이때 뒤에 기능은 앞에 기능을 기다려야함
# 진도가 적힌 배열 progresses(먼저배포가 되어야 하는 순서) 
# 각 작업의 개발 속도 speeds 배열

