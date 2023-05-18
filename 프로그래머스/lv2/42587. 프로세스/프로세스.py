# from collections import deque
from collections import deque
def solution(priorities, location):
    queue = []
    answer = 0
    # 왼쪽부터 실행되는데 만약 더 우선순위 높은 프로세스가 있다면 다시 큐에 넣는다.
    for i,prior in enumerate(priorities):
        # 튜플 요소(우선순위)랑 인덱스 같이 저장한다.
        queue.append((prior,i))
    
    dq = deque(queue)
    # print(dq)
    # print(queue)
    while len(dq) > 0:
        # 만약 우선순위 높은 애가 나간다면 그다음 높은애로 최댓값을 갱신해줘야 함
        maxPriority = max(dq, key=lambda x: x[0])
        # 실행된 애가 maxPriority면 실행해버리고 아니면 큐의 맨 끝으로 다시 넣는다.
        # 어차피 0인덱스로 해도 큐니까 계속 첫번째애가 바뀜
        # 그리고 지금 실행되는 요소가 location 인덱스의 요소 ,그러니까 구해야 하는 요소와 같은지 확인
        if dq[0][0] == maxPriority[0]: # 실행될 애가 우선순위가 가장 높은 애라면
            if dq[0][1] == location:
                answer = answer + 1
                return answer
            else:
                answer = answer + 1
                dq.popleft()
        
        # 실행될 요소가 최댓값이 아니라면
        else:
            dq.append(dq.popleft())
    return answer

# 45분

# >>> for entry in enumerate(['A', 'B', 'C']):
# ...     print(entry)
# 아니,, 어떻게 1을 다른 1들과 차별을 둘까 리스트가아니고 객체로해서 flag를 두면 가능할까
# 정렬해놓고 처음에 빠지는 애가 dq[location] 이라면 answer += 1 하고 리턴
# 정렬해놓고 처음에 빠지는 애가 dq[location] 아니라면  answer += 1 하고 

# for문

# popleft시 일단 location 인덱스의 요소가 최댓값이면 무조건 return 1
# popleft시 location 인덱스 요소가 최댓값이 아니라면
#             {게다가
#              if 지금빠지는 
#             }