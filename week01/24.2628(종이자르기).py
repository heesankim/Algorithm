import math

x, y = map(int, input().split())
x_list = [0, x]  # 가로 각각 길이
y_list = [0, y]  # 세로 각각 길이
for _ in range(int(input())):
    xy, length = map(int, input().split())
    if xy == 0:
        y_list.append(length)
    else:
        x_list.append(length)

print(x_list)
print(y_list)

x_list.sort()  # 좌, 위쪽부터 꺼내서 대조 하기 위함
y_list.sort()

print(x_list)
print(y_list)

# 자르는 곳의 두 차이가 변의 길이가 된다.

width = []
for i in range(1, len(x_list)):
    width.append(abs(x_list[i] - (x_list[i-1])))
print(width)

height = []
for i in range(1, len(y_list)):
    height.append(abs(y_list[i] - (y_list[i-1])))
print(height)

max_square = max(width) * max(height)

print(max_square)
