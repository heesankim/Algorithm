# from collections import deque
# def solution(priorities, location):
#     queue = []
#     answer = 0
#     # 왼쪽부터 실행되는데 만약 더 우선순위 높은 프로세스가 있다면 다시 큐에 넣는다.
#     for i,prior in enumerate(priorities):
#         # 튜플 요소(우선순위)랑 인덱스 같이 저장한다.
#         queue.append((prior,i))
#     print(queue)
    
#     dq = deque(queue)
#     # print(dq)
#     # print(queue)
#     while len(dq) > 0: 
#         # 만약 우선순위 높은 애가 나간다면 그다음 높은애로 최댓값을 갱신해줘야 함
#         maxPriority = max(dq, key=lambda x: x[0])
#         # 실행된 애가 maxPriority면 실행해버리고 아니면 큐의 맨 끝으로 다시 넣는다.
#         # 어차피 0인덱스로 해도 큐니까 계속 첫번째애가 바뀜
#         # 그리고 지금 실행되는 요소가 location 인덱스의 요소 ,그러니까 구해야 하는 요소와 같은지 확인
#         if dq[0][0] == maxPriority[0]: # 실행될 애가 우선순위가 가장 높은 애라면
#             if dq[0][1] == location:
#                 answer = answer + 1
#                 return answer
#             else:
#                 answer = answer + 1
#                 dq.popleft()
        
#         # 실행될 요소가 최댓값이 아니라면
#         else:
#             dq.append(dq.popleft()) # 빼자마자 넣는다. 

# # 45분

# # >>> for entry in enumerate(['A', 'B', 'C']):
# # ...     print(entry)
# # 아니,, 어떻게 1을 다른 1들과 차별을 둘까 리스트가아니고 객체로해서 flag를 두면 가능할까
# # 객체 플래그 .
# # 정렬해놓고 처음에 빠지는 애가 dq[location] 이라면 answer += 1 하고 리턴
# # 정렬해놓고 처음에 빠지는 애가 dq[location] 아니라면  answer += 1 하고 

# # for문

# # popleft시 일단 location 인덱스의 요소가 최댓값이면 무조건 return 1
# # popleft시 location 인덱스 요소가 최댓값이 아니라면
# #             {게다가
# #              if 지금빠지는 
# #             }







# import string
# def solution(priorities, location):

#     max_num = priorities.index(max(priorities))

#     #알파벳 배열 만들기
#     alphabet = string.ascii_lowercase
#     arr = []
#     for i in range(len(priorities)):
#         arr.append(string.ascii_lowercase[i])
    
#     #location에 해당하는 알파벳 찾아내기
#     final_location = arr[location]
#     print(final_location)
    
#     for i in range(len(priorities)):
#         print(i)
#         if priorities[i] != priorities[max_num]:
#             arr.append(arr[i]) 
#             arr.pop(0)
#         else:
#             print(arr)
#             return arr.index(final_location)+1


from collections import deque

def solution(priorities, location):
    # 각 위치에 고유한 아스키 문자를 할당합니다.
    ascii_location = [chr(65 + i) for i in range(len(priorities))]

    # 우선순위와 위치(아스키 코드)를 튜플로 묶어 deque에 저장합니다.
    queue = deque([(prior, loc) for prior, loc in zip(priorities, ascii_location)])
    answer = 0
    
    while queue:
        # 가장 높은 우선순위를 가진 문서를 찾습니다.
        maxPriority = max(queue, key=lambda x: x[0])

        # 대기열에서 문서를 하나 가져옵니다.
        doc = queue.popleft()

        # 가져온 문서의 우선순위가 가장 높다면 인쇄합니다.
        if doc[0] == maxPriority[0]:
            answer += 1  # 인쇄 순서를 업데이트합니다.

            # 인쇄한 문서가 요청한 문서인지 확인합니다.
            if doc[1] == ascii_location[location]:
                return answer

        # 가져온 문서의 우선순위가 가장 높지 않다면 대기열의 맨 뒤로 돌려보냅니다.
        else:
            queue.append(doc)