from collections import deque
import sys
input = sys.stdin.readline

# 첫째 줄에 1보다 크거나 같고, 106보다 작거나 같은 자연수 N이 주어진다.
# 첫째 줄에 연산을 하는 횟수의 최솟값을 출력한다.

# 둘째 줄에는 N을 1로 만드는 방법에 포함되어 있는 수를 공백으로 구분해서 순서대로 출력한다. 정답이 여러 가지인 경우에는 아무거나 출력한다.
"""
정수 x에 사용할 수 있는 연산 세 가지
1. X가 3으로 나누어 떨어지면, 3으로 나눈다.
2. X가 2로 나누어 떨어지면, 2로 나눈다.
3. 1을 뺀다.
"""
# 정수 N값을 받는다
N = int(sys.stdin.readline())

# 갱신하기 위해 임의의 큰 값 지정
# 연산횟수(비용)을 리스트에 뒤에서 부터 담는다.
costs = [10**6] * (N+1)
costs[N] = 0  # 출발하는 곳에는 비용이 0임 (연산횟수)

# 큐 리스트
q = deque()
q.append((N, 0, [N]))

while q:  # 큐가 빌 떄까지
    # 현재점 가리키는 포인터
    ptr, cost, nums = q.popleft()

    # ptr = N  # 1이 되는 게 목표
    if ptr == 1:  # 도착했다면
        print(cost)  # 연산횟수(비용 출력)
        print(*nums)
        break

    if ptr % 3 == 0 and costs[int(ptr / 3)] > cost + 1:
        q.append((int(ptr / 3), cost + 1, nums + [int(ptr/3)]))
        costs[int(ptr / 3)] = cost + 1

    if ptr % 2 == 0 and costs[int(ptr / 2)] > cost + 1:
        q.append((int(ptr / 2), cost + 1, nums + [int(ptr/2)]))
        costs[int(ptr / 2)] = cost + 1

    if costs[ptr - 1] > cost + 1:
        q.append((ptr - 1, cost + 1, nums + [ptr-1]))
        costs[ptr - 1] = cost + 1


# 만약 종료 조건 없이 하려면
# print(cost[1])
# 종료 조건 없어도 결국 costs 의 마지막 인덱스로 돌아가서 while문 종료됨
