# 어렵구나 .. 

from pickle import DUP


N = int(input())  # 도시의 수
W = [list(map(int, input().split())) for _ in range(N)]
dp = [[0] * (1 << N-1) for _ in range(N)]  # 도시가 4개라면 1000(각 자리수별로 도시 표시) == 2**n


print(dp)






# 4
# 0 10 15 20
# 5 0 9 10
# 6 13 0 12
# 8 8 9 0