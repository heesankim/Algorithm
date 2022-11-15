import sys

input = sys.stdin.readline


n, m = map(int, input().split())

matrix = []

for _ in range(n):
    matrix.append(list(map(int, input().split())))

for i in range(n):
    temp=list(map(int, input().split()))

    for j in range(m):
        matrix[i][j] += temp[j]

for i in range(n):
    for j in range(m):
        print(matrix[i][j], end=" ")
    print()
