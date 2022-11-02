import sys
import math
input = sys.stdin.readline

whereMax = []

for i in range(9):
    n = int(input())
    whereMax.append(n)

print(max(whereMax), end=" ")
print(whereMax.index(max(whereMax))+1)
