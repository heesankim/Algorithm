# 9935 문자열 폭발

import sys

input_list = list(sys.stdin.readline().strip())

explosion_str = sys.stdin.readline().strip()
l = len(explosion_str)

stack = []
for e in input_list:
    stack.append(e)
    if len(stack) >= l: #stack에 쌓인 문자열 길이가 폭발 문자열보다 길어지면 검사 시작
        if ''.join(stack[-l:]) == explosion_str:
            for i in range(l):
                stack.pop()

if len(stack)==0:
    print("FRULA")
else:
    print(''.join(stack))