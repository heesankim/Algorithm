# 8진수, 10진수, 16진수 형태로 입력 받아서 10진수로 변환해서 값을 출력하라.
import sys

input = sys.stdin.readline

n = input()


if str.startswith('0'):
    for i in reversed(range(n.length)):
        int(str[i])

elif str.startswith('0x'):

else:
    print(int(n))


# for i in reversed(range(10)):
#     print(i)

# 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
