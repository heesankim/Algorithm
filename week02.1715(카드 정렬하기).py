# 정렬된 두묶음의 숫자 카드가 있다.
# 각 묶음의 카드의 수를 각각 A,B
# 예를 들어 10장, 20장, 40장의 묶음이 있다면 10장과 20장을 합친 뒤,
# 합친 30장 묶음과 40장을 합친다면 (10 + 20) + (30 + 40) = 100번의 비교가 필요하다.
# 그러나 10장과 40장을 합친 뒤, 합친 50장 묶음과 20장을 합친다면
# (10 + 40) + (50 + 20) = 120 번의 비교가 필요하므로 덜 효율적인 방법이다.
# N개의 숫자 카드 묶음의 각각의 크기가 주어질 때,
# 최소한 몇 번의 비교가 필요한지를 구하는 프로그램을 작성하시오.


# --> 비교 횟수가 가장 적으려면 가장 작은 값들부터 먼저 계산해야 한다.
# 단 하나의 값이 남을 때까지 가장 작은 값 2개를 계산, 추가 , 그리고 저장을 반복한다.

# 일반적인 배열로 처리할 경우 시간 초과가 발생한다.
# 정렬하는 과정을 우선순위 큐에 맡겨주면 시간 초과가 발생하지 않는다.
# 우선순위큐가 정렬을 스스로 해준다. 시간복잡도를 줄일 수 있다.


import sys
import heapq
from this import d

input = sys.stdin.readline

N = int(input())

cards = [int(input()) for _ in range(N)]
heapq.heapify(cards)  # 힙큐형태로 cards 를 변환해준다.
cnt = 0  # 최소 비교 횟수

while len(cards) > 1:
    # 가장 작은 값 2개를 계산해서 tmp에 임시로 저장한다.
    tmp = heapq.heappop(cards) + heapq.heappop(cards)
    heapq.heappush(cards, tmp) # 카드 계속 추가
    cnt = cnt + tmp # 비교해서 값을 더한다.

print(cnt)