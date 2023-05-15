def solution(answers):
    supo1 =  [1, 2, 3, 4, 5]
    supo2 =  [2, 1, 2, 3, 2, 4, 2, 5]
    supo3 =  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    supo1Count = 0;
    supo2Count = 0;
    supo3Count = 0;
    answer = []
    for i in range(len(answers)):
        # answers 엄청나게 길어도 계속 저 패턴으로 답을 찍음
        if answers[i] == supo1[i % len(supo1)]: # 6번쨰라면 다시 1 이니까 len으로나눴을떄 나머지 인덱스
            supo1Count += 1
        if answers[i] == supo2[i % len(supo2)]:
            supo2Count += 1
        if answers[i] == supo3[i % len(supo3)]:
            supo3Count += 1
            
            
    maxCount = max(supo1Count,supo2Count,supo3Count)
    
    if maxCount == supo1Count:
        answer.append(1)
    if maxCount == supo2Count:
        answer.append(2)
    if maxCount == supo3Count:
        answer.append(3)
    return answer



# 11시 10분까지 고고.
