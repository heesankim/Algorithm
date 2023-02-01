import sys

input = sys.stdin.readline

n, m = map(int, input().split())

# cards = []
arr = list(map(int, input().split()))

# print(arr)
result = 0
for i in range(n):
    for j in range(i+1, n):
        for k in range(j+1, n):
            sum = arr[i] + arr[j] + arr[k]
            if sum > m:
                continue
            else:
                result = max(result, sum)

print(result)