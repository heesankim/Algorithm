# 백준 5904 무수열
# 재귀적으로 만들 수 있다.
# s(0) 의 길이가 3인 수열 "m o o"이라고 하자. 1보다 크거나 같은 모든 k에 대해서, S(k)는 S(k-1)과 o가 k+2개인 수열 "m o ... o" 와 S(k-1)을 합쳐서 만들 수 있다.

import sys
input = sys.stdin.readline
N = int(input())

# S(0) = "m o o" len = 3
# S(1) = "m o o / m o o o /  m o o" len 10
# S(2) = "m o o m o o o m o o / m o o o o / m o o m o o o m o o" len 25
# S(3) = "m o o m o o o m o o m o o o o  m o o m o o o m o o / m o o o o o / m o o m o o o m o o  m o o o o  m o o m o o o m o o len 56개
# N이 주어졌을 때, Moo 수열의 N번째 글자를 구하는 프로그램을 작성하시오.

# S(k-1 ) + (m + o * (k+2)) + S(k-1)
# 길이가 변화는 것을 보면은 l = l(S(l-1)) * 2 + c 라는 식이 나온다

# 1. S(k-1)
# 2. 'm' + (k+2) * 'o'
# 3. S(k-1)


# 풀지 못했습니다.


