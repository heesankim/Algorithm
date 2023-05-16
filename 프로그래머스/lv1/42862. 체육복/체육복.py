def solution(n, lost, reserve):
    answer = 0

    # 여벌을 가지고 있는 학생이 도난 당할 경우 고려 -> 하나만 도난당했다고 가정하기에 중복을 제거 한다.
    reserve_del = set(reserve) - set(lost)
    lost_del = set(lost) - set(reserve)
    
    for i in reserve_del:
        if i-1 in lost_del: # 자신의 앞번호 학생부터 우선순위로 빌려줘야 함
            lost_del.remove(i-1)
        elif i+1 in lost_del:
            lost_del.remove(i+1)
            
    answer = n - len(lost_del)
    return answer