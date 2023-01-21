# 8진수, 10진수, 16진수 형태로 입력 받아서 10진수로 변환해서 값을 출력하라.
import sys

input = sys.stdin.readline

x = input()

if '0x' in x:
    x = int(x,16)
elif x[0] == '0':
    x = int (x,8)
print(x)

