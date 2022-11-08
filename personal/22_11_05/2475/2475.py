import sys

input = sys.stdin.readline
nums = list(map(int, input().split()))

sum = 0
for i in nums:
    sum = sum + (i**2 % 10)

print(sum % 10)
