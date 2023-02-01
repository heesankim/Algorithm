# 숫자 카드
# 상근 숫자 카드 N개 가지고 있다.
# 정수 M개가 주어졌을 때, 이 수가 적혀있는 숫자 카드를 상근이가 가지고 있는지 아닌지 구하는 프로그램을 작성하라.

# # 먼저 have를 정렬한다
# # 이진 탐색 : mid는 (start+end) // 2
# # 만약 target이 중앙값보다 크다면 mid보다 오른쪽에 있기 때문에
# # 그리고 check 첫 요소부터 have에 있는지 검사하고 있으면 1 없으면 0을 출력한다.
# # print(1,end=" ") , print(0,end=" ")

import sys

input = sys.stdin.readline

n = int(input())
have = list(map(int, input().split()))
m = int(input())
check = list(map(int, input().split()))
have.sort()

def binary_search(array, target, start, end):
    while start <= end:
        mid = (start + end) // 2
        if array[mid] == target:
            return mid
        elif array[mid] > target:
            end = mid - 1
        else:
            start = mid + 1


for i in range(m):
    if binary_search(have, check[i], 0, n-1) is not None:
        print(1, end=" ")
    else:
        print(0, end=" ")
