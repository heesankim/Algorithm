# 분해합
# 어떤 자연수 N이 있을 때, 그 자연수 N의 분해합은 N과 N을 이루는 각 자리수의 합을 의미
# 어떤 자연수 M의 분해합이 N인 경우, M을 N의 생성자라 한다.
#  예를 들어, 245의 분해합은 256(=245+2+4+5)이 된다. 따라서 245는 256의 생성자가 된다.
import sys

input = sys.stdin.readline

n = int(input())

for i in range(1, n+1):
    num = sum(map(int, str(i)))
    num_sum = i + num
    if num_sum == n:
      print(i)
      break
    if i == n:
      print(0)