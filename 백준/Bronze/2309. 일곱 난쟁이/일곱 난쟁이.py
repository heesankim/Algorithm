import sys
import random
small = []
for i in range(9):
    small.append(int(sys.stdin.readline()))

while True: # 합이 100될때까지 7개 무작위
    picked_small = random.sample(small, 7)
    sum_small = sum(picked_small)
    if sum_small == 100:
        break

picked_small.sort()  ## 오름차순 정렬


for i in range(7):
    print(picked_small[i])
