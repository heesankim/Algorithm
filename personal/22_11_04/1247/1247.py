import sys

input = sys.stdin.readline

for _ in range(3):
    nums = []
    n = int(input())
    for _ in range(n):
        number = int(input())
        n = nums.append(number)
    if sum(nums) > 0:
        print('+')
    elif sum(nums) < 0:
        print('-')
    else:
        print('0')

