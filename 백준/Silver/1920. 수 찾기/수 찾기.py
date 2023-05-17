import sys
input = sys.stdin.readline

n = int(input())

num_list = list(map(int, input().split()))

k = int(input())

target_list = list(map(int, input().split()))

sortedNumList = sorted(num_list)
def num(sortedNumList):
    for i in target_list:
        start = 0
        end = len(sortedNumList) - 1
        while start <= end:
            mid = (start + end) // 2
            if i == sortedNumList[mid]:
                # i == mid 가 아니라 i = sortedNumList[mid] (인덱스로 접근해야함)
                print(1)
                break
            elif i < sortedNumList[mid]:
                end = mid - 1  # 얘는 숫자임
            elif i > sortedNumList[mid]:
                start = mid + 1  # 얘는 숫자임
        else:
            print(0)


num(sortedNumList)
